import React, { useContext, useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { ApiSettings } from '../../context/api-settings'

import BannerSection from './partials/BannerSection'
import VideoSection from './partials/VideoSection'
import CardsSection from './partials/CardsSection'
import FeaturedProductGrid from './partials/FeaturedProductGrid'
import RecentProducts from './partials/RecentProducts'
import FeaturedProduct from './partials/FeaturedProduct'
import AboutAustralian from './partials/AboutAustralian'
import OurClient from './partials/OurClient'
import LatestBlogPosts from './partials/LatestBlogPosts'
import SubscribedNewsletter from './partials/SubscribedNewsletter'

function Home() {
   const appSettings = useContext(ApiSettings);
   const [settings, setSettings] = useState([]);
   const fbUrl = window.location.href;

   var getSettings = async () => {
      let endPoint = appSettings.getApiEndPoint(appSettings, 'setting');
      const response = await fetch(endPoint)
      try {
         const data = await response.json();
         setSettings(data.data);
      } catch (e) {
         console.log(e)
      }
   }
   useEffect(() => {
      getSettings();

   }, []);

   return (
      <>
         <div>
            <Helmet>
               <meta charSet="utf-8" />
               <title>{settings.site_title}</title>
               <link rel="canonical" href="https://australianbollards.com.au/" />
               <meta name="description" content={settings.seo_description} />
               <link rel="shortcut icon" href={settings.seo_description} type="image/png"></link>

               {/* <!-- FB button --> */}
               <meta property="og:url" content={fbUrl} />
               <meta property="og:type" content="website" />
               <meta property="og:title" content={settings.site_title} />
               <meta property="og:description" content={settings.seo_description} />
               <meta property="og:image" content={settings.site_logo} />

            </Helmet>

            <BannerSection />
            <VideoSection />
            <CardsSection />
            <FeaturedProductGrid />

            <div className="relative font-sans my-10">
               <img alt="card" src="./images/website-cover-photo--marvel-1635305326736.webp" className=" flex h-96 w-full object-cover" />
               <div className='absolute inset-0 flex justify-center items-center h-full bg-[#404040] bg-opacity-60'>
                  <div className='flex flex-col space-y-8 w-11/12 mx-auto  '>
                     <label className='text-[32px] text-white font-bold text-center flex flex-col items-center justify-center h-24 tracking-wider'>
                        <h1>DO YOU HAVE ANY QUESTIONS ?</h1>
                        <h1>+ {settings.contact_phone}</h1>
                     </label>
                     <div className='flex justify-center items-center w-full'>
                        <Link To={`tel:+${settings.contact_phone}`} className='uppercase bg-[#f89903] h-12 px-4 font-bold hover:bg-yellow-600 hover:text-white'>GET A QUOTE</Link>
                     </div>
                  </div>
               </div>
            </div>

            <RecentProducts />
            <FeaturedProduct />
            <AboutAustralian />
            <OurClient settings={settings} />
            <LatestBlogPosts />
            <SubscribedNewsletter />

         </div>
      </>
   );
}

export default Home;