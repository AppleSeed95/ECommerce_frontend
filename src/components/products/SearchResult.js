import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';

import { ApiSettings } from '../../context/api-settings';


const SearchResult = ({resultPosts, setTotalRows, getPerPage, getSortOrder, getSearch, searchPage='yes'}) => {
    
    const [pageLimit, setPageLimit] = useState('');
    const hostUrl = useContext(ApiSettings);
    const isShowDefaultImage = (productImage)=>{
        return hostUrl.isShowDefaultImage(hostUrl, productImage);
    }

    const handleProductPerPageChange = (e)=>{
        getPerPage(e.target.value);
    }

    const handleProductSorting = (e)=>{
        getSortOrder(e.target.value);
    }
    
	return (
        <>
        <div className='xl:w-full space-y-4'>
            {searchPage && 
                <>
                    <div className='relative flex items-center'>
                        <input
                            type='search'
                            placeholder='Search product'
                            className='w-full ring-1 ring-gray-300 focus:outline-none h-10 pl-12 pr-6 bg-gray-50'
                            // onChange={() => getSortOrder(this.state.inputValue)}
                            onKeyUp={e => getSearch(e.target.value)}
                        />
                        
                        <label className="absolute inset-y-0 left-4 flex items-center">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" ><path strokeLinejoin="round" strokeLinecap="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                        </label>
                    </div>

                    <div className='md:flex justify-between gap-3 text-sm'>
                        <label className='font-bold'>
                            {setTotalRows} Product
                        </label>
                        <div className='flex gap-3'>
                            <label className='bg-gray-100 flex items-center justify-between p-1.5'>
                                Show
                                <select className='bg-transparent focus:outline-none' onChange={handleProductPerPageChange} value={pageLimit}  >
                                    <option value="12">12</option>
                                    <option value="24">24</option>
                                    <option value="48">48</option>
                                </select>
                            </label>
                            <label className='bg-gray-100 flex items-center justify-between p-1.5'>
                                <select className='bg-transparent focus:outline-none' onChange={handleProductSorting} value={pageLimit} >
                                    <option value="a-z">Alphabetically, A-Z</option>
                                    <option value="z-a">Alphabetically, Z-A</option>
                                    <option value="feature">Featured</option>
                                    <option value="availability">Availability</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </>
            }

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-6">
                {resultPosts.map((post) => (
                    <div key={Math.random()} className='space-y-3'>
                        <div className='space-y-3'>
                            <Link to={'products/'+post.product_slug} className="flex flex-col text-[#f89903]">
                                <img
                                    src={hostUrl.imageHost + isShowDefaultImage(post.product_image)} 
                                    className="w-full object-cover lg:object-fill h-56 px-2"
                                    alt={post.product_name}
                                />
                            </Link>

                            <Link to={'products/'+post.product_slug} className="flex flex-col font-sans space-y-1 justify-center items-center">
                                <label className='text-xs'>Australian Bollards</label>
                                <label className='tracking-wide font-semibold'>
                                    {post.product_name}
                                </label>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>


        
        </>
	);
 };
 
 export default SearchResult;