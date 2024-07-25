import React, {useContext, useEffect, useState} from 'react';
import { Link } from "react-router-dom";

import { ApiSettings } from '../../../context/api-settings';

function CardsSection () {
	const apiDetails = useContext(ApiSettings);
	const [banners, setBanners] = useState([]);

	var loadBanners = async ()=>{
		const apiEndPoint = apiDetails.getApiEndPoint(apiDetails, 'banners');
		// console.log(apiEndPoint);

		const responce = await fetch(apiEndPoint+'/cards/home page')
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
        <div className='grid md:grid-cols-2 gap-6 w-11/12 mx-auto' key={Math.random()}>
            {banners.map((banner)=>{
                return(
                    <>
                        <label className="relative font-sans">
                            <img alt={banner.banner_name} src={banner.banner_image} className=" flex h-96 w-full" />
                            <div className='absolute inset-x-0 top-0 h-full'>
                                <div className='flex flex-col space-y-8 w-11/12 mx-auto' dangerouslySetInnerHTML={{__html: banner.banner_html }}></div>
                                <div className='mt-10 flex justify-center items-center w-full'>
                                    {/* <button type='button' className='uppercase bg-[#f89903] h-12 px-4 font-bold hover:bg-yellow-600 hover:text-white'>View Now</button>` */}
                                    <Link to={banner.banner_link} className='uppercase bg-[#f89903] h-12 px-4 font-bold hover:bg-yellow-600 hover:text-white flex items-center'>View Now</Link>
                                </div>
                            </div>
                        </label>
                    </>
                )
            })}

        </div>
        </>
    );
}
export default CardsSection;