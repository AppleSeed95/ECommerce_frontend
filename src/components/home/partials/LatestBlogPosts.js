import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ApiSettings } from '../../../context/api-settings';

const LatestBlogPosts = () => {
    const apiDetails = useContext(ApiSettings);
    const [showFullContent, setShowFullContent] = useState(false);
    const [blogPosts, setBlogPosts] = useState([]);
    // homepageListing
    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    // Sample array of blog posts
    const getBlogPosts = async () => {
        const apiEndPoint = apiDetails.getApiEndPoint(apiDetails, 'blogs');
        // console.log(apiEndPoint);

        const response = await fetch(apiEndPoint+'/homepageListing')
        try {
            const data = await response.json();
            setBlogPosts(data.data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getBlogPosts();
    }, []);
    return (
        <>
            <div className="px-2 lg:px-0 lg:w-9/12 py-14 mx-auto space-y-8">
                <div>
                    <h1 className="font-bold text-[36px] text-center">
                        LATEST <span className="text-[#f89903]">BLOG POSTS</span>
                    </h1>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="border border-gray-500 rounded">
                            <div>
                                <Link to={`/blogs/blog/${post.blog_slug}`} className="flex flex-col space-y-2 text-[#f89903]">
                                    <img
                                        src={post.image}
                                        className="w-full object-fill h-60"
                                        alt="Blog Banner"
                                    />
                                    <span className="px-4 text-2xl font-semibold">{post.blog_title}</span>
                                </Link>

                                <div className="flex flex-col p-4 font-sans space-y-1">
                                    <p dangerouslySetInnerHTML={{__html: showFullContent ? post.description.slice(0, 300) : post.description.slice(0, 100)+'...' }}>
                                    </p>
                                    <button
                                        type="button"
                                        className="hover:text-[#f89903] text-left underline text-sm"
                                        onClick={toggleContent}
                                    >
                                        {showFullContent ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default LatestBlogPosts;
