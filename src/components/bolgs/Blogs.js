import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from "react-helmet";

import { useParams, useSearchParams } from 'react-router-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ApiSettings } from '../../context/api-settings';
import Moment from 'moment';

const Blogs = ({tagLists}) => {
    const appSettings = useContext(ApiSettings)
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const curentPage = Number(queryParams.get("page")) || 1;

    const [blogs, setBlog] = useState([])
    const [totalPages, setTotalRows] = useState(1)
    const endPoint = appSettings.getApiEndPoint(appSettings, 'blogs/')
    let query = appSettings.useQuery();

    const blogData = async () => {
        let page = Number(query.get('page'));
        let url = endPoint + 'blog';
        var cpage = 1;
        if (page) {
            cpage = page
            url = url + '?page=' + page;
        }
        const getBlogData = await fetch(url)
        try {
            const data = await getBlogData.json();
            let totalPages = Math.ceil(data.data.total / appSettings.recordsPerPage);
            setBlog(data.data.blog);
            setTotalRows(totalPages);
         } catch (e) {
            console.log(e)
        }
    }
    
    
    useEffect(() => {
        // console.log('tagLists', tagLists);
        blogData();
    }, [curentPage]);

    const loadBlogs = (newPage) => {
        queryParams.set("page", newPage);
        navigate({ search: queryParams.toString() });
        // blogData();
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blog</title>
                <link rel="canonical" href="https://australianbollards.com.au/blogs/blog" />
                <meta name="description" content="Read our latest blog posts for informative articles and updates." />
            </Helmet>
            <div className=''>
                <div className='space-y-6 border-b  py-10'>
                    <h1 className='text-4xl font-bold text-center '>Blogs</h1>
                    {/* <label htmlFor='filter' className='text-xs gap-2 flex items-center justify-center'>
                        FILTER BY
                            {tagLists.map((tag) => {
                                console.log(tag)
                                return(
                                    <li>{{tag}}</li>
                                )
                            })}
                        <select id='filter' className='w-36 px-2 ring-1 h-10 rounded text-sm'>
                            <option>Select</option>

                        </select> */}
                        {/* <Field id="filter" name="tagList" {...rest} as={Form.Select}>
                            {options.map((option) => {
                                return (
                                    <option key={option.value} value={option.value}>
                                        {option.key}
                                    </option>
                                );
                            })}
                        </Field> * /}
                    </label>*/}
                </div>
            </div>

            <div className='py-10'>
                {blogs.map((blog) => {
                    return (
                        <>
                            <div className='space-y-5 flex flex-col w-full lg:w-7/12 mx-auto px-3 separator'>
                                <Link exact="true" to={`/blogs/blog/${blog.blog_slug}`} className='text-[#ff8000] hover:text-gray-700 text-3xl font-bold'>
                                    {blog.blog_title}
                                </Link>

                                <h2>
                                    by NJM Group  {Moment(blog.created_at).format('MMMM D, YYYY')}
                                </h2>

                                <Link exact="true" to={`/blogs/blog/${blog.blog_slug}`} className="w-full">
                                    <img src={blog.image} alt="AusBollards Logo" className="w-full h-[30rem] border rounded" />
                                </Link>

                                <div className='space-y-3 flex flex-col'>
                                    <p dangerouslySetInnerHTML={{ __html: blog.description }}></p>

                                    {blog.tags ? <p dangerouslySetInnerHTML={{ __html: `Posted in &nbsp;${blog.tags}` }}></p>:null}

                                    <Link exact="true" to={`/blogs/blog/${blog.blog_slug}`} className='uppercase border border-[#ff8000] hover:border-[#ca8846] text-[#ff8000] hover:text-[#ca8846] text-sm text-center py-1 w-28'>Read More</Link>
                                </div>
                            </div>
                        </>

                    )

                })}

            </div>

            <div className='flex justify-center items-center gap-8 pt-8 pb-14'>
                <button onClick={() => loadBlogs(curentPage - 1)} disabled={curentPage === 1} className='text-[#f5a623] border border-[#f5a623] hover:text-yellow-600 text-base uppercase h-10 flex justify-center items-center w-12'>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </button>
                <label>
                    Page {curentPage} of {totalPages}
                </label>
                <button onClick={() => loadBlogs(curentPage + 1)} disabled={curentPage === totalPages} className='text-[#f5a623] border border-[#f5a623] hover:text-yellow-600 text-base uppercase h-10 flex justify-center items-center w-12'>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </button>

            </div>
        </>
    );
};

export default Blogs;