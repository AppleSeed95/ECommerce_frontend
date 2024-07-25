import React, {useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ApiSettings, apiDetails } from '../../context/api-settings';
import Moment from 'moment';

const BlogInfo = () => {
    const params = useParams();
    const appSettings = useContext(ApiSettings)
    const [blog, setBlog] = useState([])

    const endPoint = appSettings.getApiEndPoint(appSettings, 'blogs/')

    const blogData = async ()=>{
        const getBlogData = await fetch(endPoint+'blog/'+params.blogSlug)
        try {
            const data = await getBlogData.json();
            setBlog(data.data[0]);
            console.log('app ', blog)
        } catch (e) {
            console.log(e)
        }

    }
    useEffect(()=>{
        blogData();
    }, []);


	return (
	  <>
      <div className='border-b'>
            <div className='w-full lg:w-7/12 px-3 lg:px-0 mx-auto space-y-6 py-10'>
                <h1 className='text-4xl font-bold text-center '>{blog.blog_title}</h1>

                <div className='space-y-5 flex flex-col'>
                    <h2 className='text-center pb-6'>
                    by NJM Group {Moment(blog.created_at).format('MMMM D, YYYY')}
                    </h2>

                    <label className="w-full">
                        <img src={blog.image} alt={blog.blog_title} className="w-full h-[30rem] border rounded" />
                    </label>
                    
                    <p dangerouslySetInnerHTML={{__html: blog.description }}></p>
                </div>

                <div className='py-1 flex gap-2'>
                    <Link to='#' className='border border-gray-300 hover:border-gray-400 text-sm uppercase h-9 flex justify-center items-center w-24 font-bold gap-2 rounded-sm tracking-wide'>
                    <img src="/images/fb.webp" alt="AusBollards Logo" className="w-4 h-4" />
                    Share
                    </Link>
                    <Link to='#' className='border border-gray-300 hover:border-gray-400 text-sm uppercase h-9 flex justify-center items-center w-24 font-bold gap-2 rounded-sm tracking-wide'>
                    <img src="/images/tweet.webp" alt="AusBollards Logo" className="w-4 h-4" />
                    Tweet
                    </Link>
                    <Link to='#' className='border border-gray-300 hover:border-gray-400 text-sm uppercase h-9 flex justify-center items-center w-24 font-bold gap-2 rounded-sm tracking-wide'>
                    <img src="/images/pin.webp" alt="AusBollards Logo" className="w-4 h-4" />
                    Pin It
                    </Link>
                </div>
                
            </div>
        </div>

        <div className='w-full lg:w-7/12 px-3 lg:px-0 mx-auto py-10'>
            <form className='space-y-5 flex flex-col'>
                <h1 className='text-3xl font-bold'>Leave a comment</h1>

                <div className='grid grid-cols-2 gap-10'>
                    <label className='flex flex-col gap-2'>
                        <span>Name</span>
                        <input type='text' className='ring-1 ring-gray-400 rounded-sm h-10 bg-gray-50' />
                    </label>
                    <label className='flex flex-col gap-2'>
                        <span>Email</span>
                        <input type='text' className='ring-1 ring-gray-400 rounded-sm h-10 bg-gray-50' />
                    </label>
                </div>
                <label className='col-span-2 flex flex-col gap-2'>
                    <span>Message</span>
                    <textarea rows="4" className='ring-1 ring-gray-400 rounded-sm bg-gray-50'></textarea>
                </label>
                    
                <label className='italic'>
                    Please note, comments must be approved before they are published
                </label>

                <button type='button' className='bg-[#f5a623] hover:bg-yellow-600 hover:text-white font-bold w-36 rounded-sm h-10 text-base'>
                    Post Comment
                </button>
            </form>
        </div>

        <div className='flex justify-center pt-8 pb-14'>
            <Link to='/blogs/blog' className='text-[#f5a623] border border-[#f5a623] hover:text-yellow-600 text-base uppercase h-10 flex justify-center items-center w-48 font-bold gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
                Back To Blog
            </Link>
        </div>
      </>
	);
 };
 
 export default BlogInfo;