import React, {useContext, useEffect, useState} from 'react';
import { Link } from "react-router-dom";

import { ApiSettings } from '../../../context/api-settings';

function FeaturedProductGrid () {
	const apiDetails = useContext(ApiSettings);
	const [banners, setBanners] = useState([]);

	var loadBanners = async ()=>{
		const apiEndPoint = apiDetails.getApiEndPoint(apiDetails, 'products');
		// console.log(apiEndPoint);

		const responce = await fetch(apiEndPoint+'/feturedProducts/3')
		try{
			const data = await responce.json();
			setBanners(data.data);
		} catch (e) {
			console.log(e)
		}
	}
	
	useEffect(()=>{
		loadBanners();
	}, []);
    return (
        <>
        <div className='px-2 lg:px-0 lg:w-10/12 py-14 mx-auto space-y-8' key={Math.random()} >
            <h1 className='font-bold text-[36px] text-center' >FEATURED <span className='text-[#f89903]'>PRODUCTS</span> GRID</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto'>
                
            {banners.map((banner)=>{
                return(
                    <>
                    <label key={Math.random()} className="relative font-sans">
                        <img alt="card" src={banner.product_image} className=" flex h-[30rem] w-full object-cover" />
                        <div className='absolute inset-0 flex justify-center items-center h-full'>
                            <div className='flex flex-col space-y-8 w-11/12 mx-auto' >
                                {/* <div dangerouslySetInnerHTML={{__html: banner.product_name }} /> */}
                                <h1 className='text-[32px] text-white font-bold text-center flex items-center justify-center h-24'>{banner.product_name } </h1>
                                <div className='mt-10 flex justify-center items-center w-full'>
                                    {/* <button type='button' className='uppercase bg-[#f89903] h-12 px-4 font-bold hover:bg-yellow-600 hover:text-white'>Quick View</button> */}
                                    <Link to={banner.banner_link} className='uppercase bg-[#f89903] h-12 px-4 font-bold hover:bg-yellow-600 hover:text-white flex items-center'>Quick Now</Link>
                                </div>
                            </div>
                        </div>
                    </label>
                    </>
                )
            })}

                {/* <label className="relative font-sans">
                    <img alt="card" src="./images/featured-1.webp" className=" flex h-[30rem] w-full object-cover" />
                    <div className='absolute inset-0 flex justify-center items-center h-full'>
                        <div className='flex flex-col space-y-8 w-11/12 mx-auto  '>
                            <h1 className='text-[32px] text-white font-bold text-center flex items-center justify-center h-24'>HIGH IMPACT BOLLARDS</h1>

                            <div className='mt-10 flex justify-center items-center w-full'>
                                <button type='button' className='uppercase bg-[#f89903] h-12 px-4 font-bold hover:bg-yellow-600 hover:text-white'>Quick View</button>`
                            </div>
                        </div>
                    </div>
                </label>
                <label className="relative font-sans">
                    <img alt="card" src="./images/featured-2.webp" className=" flex h-[30rem] w-full object-cover" />
                    <div className='absolute inset-0 flex justify-center items-center h-full'>
                        <div className='flex flex-col space-y-8 w-11/12 mx-auto  '>
                            <h1 className='text-[32px] text-white font-bold text-center flex items-center justify-center h-24'>STAINLESS STEEL BOLLARDS</h1>

                            <div className='mt-10 flex justify-center items-center w-full'>
                                <button type='button' className='uppercase bg-[#f89903] h-12 px-4 font-bold hover:bg-yellow-600 hover:text-white'>Quick View</button>`
                            </div>
                        </div>
                    </div>
                </label>
                <label className="relative font-sans">
                    <img alt="card" src="./images/featured-3.webp" className=" flex h-[30rem] w-full object-cover" />
                    <div className='absolute inset-0 flex justify-center items-center h-full'>
                        <div className='flex flex-col space-y-8 w-11/12 mx-auto  '>
                            <h1 className='text-[32px] text-white font-bold text-center flex items-center justify-center h-24'>EVENT BOLLARDS</h1>

                            <div className='mt-10 flex justify-center items-center w-full'>
                                <button type='button' className='uppercase bg-[#f89903] h-12 px-4 font-bold hover:bg-yellow-600 hover:text-white'>Quick View</button>`
                            </div>
                        </div>
                    </div>
                </label> */}
            </div>
        </div>
        </>
    );
}
export default FeaturedProductGrid;