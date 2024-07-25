import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { ApiSettings } from '../../../context/api-settings';

const AboutAustralian = () => {
    
    const apiDetails = useContext(ApiSettings);
    const [aboutBollard, setPage] = useState({
        "about_au_bollard": "",
        "about_bollard_collection_link": "#",
        "about_bollard_video": [],
        "about_bollard_collection": "",
        "about_bollard_video_title": []
    });
    var loadPages = async () => {
        const apiEndPoint = apiDetails.getApiEndPoint(apiDetails, 'pages/homepageAboutBollard');
        const responce = await fetch(apiEndPoint)
        try {
            const data = await responce.json();
            setPage(data.data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadPages();
    }, []);


	return (
        <>
        <div className='px-2 lg:px-0 lg:w-9/12 pb-10 mx-auto space-y-8'>
            <h1 className='font-bold text-[36px] text-center'>
            ABOUT <span className='text-[#f89903]'>AUSTRALIAN BOLLARDS</span> 
            </h1>

            <div className='md:flex gap-10' dangerouslySetInnerHTML={{__html: aboutBollard.about_au_bollard }} >
                {/* <div className='md:w-5/12 flex flex-col space-y-8'>
                    <img src='../images/about.webp' alt='About Australian' className='w-full object-cover h-96' />
                    <label className="h-60">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lF7Ta3dYv_4" title="AB TRB 900 - Automatic 2 Stage Telescopic Bollard System - by Australian Bollards" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </label>
                </div>
                <div className='md:w-7/12 flex flex-col justify-between'>
                    <p>
                        Operating under NJM Group, Australian Bollards is the country’s premier bollard manufacturer.

                    </p>
                    <p>
                        We manufacture, install and service a wide range of asset protection and safety products including plastic, galvanised, powder coated and stainless steel bollards, bump rails, handrails, bike hoops, wheel stops, speed humps, road safety products, electronic display systems, street furniture and more. Our Bollards meet Australian Standards AS/NZS 3845:1999.
                    </p>
                    <p>
                        We do more than just drop bollards on your doorstep. We can help you design a project, manufacture, deliver, install and service the products. We also offer consultations to ensure the best possible results.
                    </p>
                    <p>
                        Service and quality is our philosophy and for almost 30 years, Australian Bollards has been providing our customers with the highest level in asset protection and public security with our cost efficient installations.
                    </p>
                    <p>
                        Providing services and local installers to VIC, NSW, QLD, TAS, WA, SA, and the ACT, Australian Bollards has formed strong partnerships over the years with local councils Australia-wide including the City of Banyule, the City of Greater Bendigo, Sunshine Coast Regional, Central Coast Council and the City of Yarra.
                    </p>
                    <p>
                        Make Australian Bollards your number one choice to protect your business and staff today!
                    </p>
                    <p>
                        As a global company, Australian Bollards has taken an environmentally friendly approach to developing our business. All our manufacturing centres are powered by 100 percent renewable energy.
                    </p>
                </div> */}
            </div>

        </div>

        <div className='md:flex gap-10 pb-10 w-9/12 mx-auto space-y-4 md:space-y-0'>
                <div className='md:w-8/12 flex flex-col space-y-8 h-full my-auto'>
                    <img alt='Australian Bollard' src={aboutBollard.about_bollard_collection} className='w-full object-contain h-full' />
                </div>
                <div className='md:w-4/12 flex flex-col justify-between space-y-6'>
                    <label className="h-52">
                        <iframe width="100%" height="100%" src={aboutBollard.about_bollard_video[0]} title={aboutBollard.about_bollard_video_title[0]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </label>
                    <label className="h-52">
                        <iframe width="100%" height="100%" src={aboutBollard.about_bollard_video[1]} title={aboutBollard.about_bollard_video_title[1]} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </label>
                </div>
            </div>
        </>
	);
 };
 
 export default AboutAustralian;