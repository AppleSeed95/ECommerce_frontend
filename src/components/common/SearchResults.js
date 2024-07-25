import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";

const SearchResults = ({ result, searchKey }) => {
    const location = useLocation();

    return (
        <>
            <ul className='flex-1 items-center gap-4 w-full md:w-6/12 mx-auto overflow-x-hidden overflow-y-auto h-1/2 fixed text-xl lg:text-[32px] inset-x-20 top-20 bg-white z-50' key={Math.random()}>
                {
                    Object.keys(result).map((key) => {
                        if ((key != 'totals')) {
                            if (key != 'pages') {
                                return (
                                    <>
                                        <li key={`${key}-${Math.random()}`} className="bg-gray-400 text-right text-sm p-1 pr-2 uppercase" >
                                            {key}
                                        </li>
                                        {(result[key].rows).map((resource) => {
                                            if (key == 'categories') {
                                                return (
                                                    <>
                                                        <li>
                                                            <Link key={`${resource.slug}-${Math.random()}`} to={'collections/' + resource.slug} className="text-[#f89903] tracking-wide font-semibold p-2">{resource.title}</Link>
                                                        </li>
                                                    </>
                                                )
                                            } else {
                                                return (
                                                    <>
                                                        <li className='bg-white-100 p-1'>
                                                            <Link key={`${resource.slug}-${Math.random()}`} to={'products/' + resource.slug} className="text-[#f89903] p-2">
                                                                <div className='grid grid-cols-3 gap-4'>
                                                                    <div className=''>
                                                                        <img src={resource.image} className="basic-60 w-auto object-cover lg:object-fill h-28 px-2" alt={resource.title} />
                                                                    </div>
                                                                    <div className='col-span-2'>
                                                                        <div className='tracking-wide font-semibold'>{resource.title}</div>
                                                                        <div className='text-slate-700 text-xs'>
                                                                            {resource.title}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </>
                                                )
                                            }
                                        })}
                                    </>
                                );
                            }
                        }
                    })
                }
                <li className=' text-center'><Link key={Math.random()} to={`pages/search-results-page?q=${searchKey}`} className="text-[#f89903] text-lg p-2">View all {result['totals']} items</Link></li>
            </ul>
        </>
    );
}

export default SearchResults;
