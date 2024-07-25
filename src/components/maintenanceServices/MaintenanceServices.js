import React from 'react';
import {Helmet} from "react-helmet";

const MaintenanceServices = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Maintenance</title>
            <link rel="canonical" href="https://australianbollards.com.au/pages/maintenance" />
            <meta name="description" content="Explore our maintenance services for keeping your assets safe and secure." />
         </Helmet>
    	<div className='w-11/12 lg:w-8/12 py-16 mx-auto space-y-16'>
            <h1 className='text-4xl font-bold text-center '>Maintenance and Services</h1>

            <div className='space-y-6'>
                <p className='text-xl'>
                We at Australian Bollards, provide regular maintenance and services for our products and existing systems. We provide the regular service to ensure they are working correctly at all times so you are kept safe at all times.
                </p>

                <div className='grid grid-cols-4 gap-4'>
                    <label className="relative font-sans">
                        <img alt="card" src="../images/Flagstaff_Carpark_-_EDS_Screen_1_240x240.avif" className=" flex h-80 w-full object-cover" />
                    </label>
                    <label className="relative font-sans flex">
                        <img alt="card" src="../images/Park_Ridge_Primary_School_-_Solar_Boom_Gate_3_240x240.avif" className=" flex mt-20 w-full object-cover" />
                    </label>
                    <label className="relative font-sans flex">
                        <img alt="card" src="../images/Mornington_Peninsula_Shire_-_Pneumatic_Bollard_1_240x240.webp" className=" flex mt-20 w-full object-cover" />
                    </label>
                    <label className="relative font-sans">
                        <img alt="card" src="../images/Park_Ridge_Primary_School_-_Solar_Boom_Gate_1_240x240.avif" className=" flex h-80 w-full object-cover" />
                    </label>
                </div>
            </div>

            <div className='space-y-6'>
                <p className='text-xl'>
               Keeping your Hostile Vehicle Mitigation (HVM) systems maintained ensures that you and your assets are kept safe at all times. Scheduled maintenance are important so any flaw or damage can be identified and repaired in a timely manner. 
                </p>

                <div className='grid grid-cols-2 gap-4 w-8/12 mx-auto'>
                    <label className="relative font-sans">
                        <img alt="card" src="../images/Mornington_Peninsula_Shire_-_Pneumatic_Bollard_2_240x240.avif" className=" flex h-60 w-full object-cover" />
                    </label>
                    <label className="relative font-sans flex">
                        <img alt="card" src="../images/Mornington_Peninsula_Shire_-_Pneumatic_Bollard_3_240x240.avif" className="h-60 flex w-full object-cover" />
                    </label>
                </div>
            </div>

            <div className='space-y-6'>
                <p className='text-xl'>
                Regular maintenance of Automatic Bollards (Hydraulic or Pneumatic), Roadblocker systems and Boom gates can help recognise any electrical faults which can be repaired or replaced.
                </p>
                <div className='grid grid-cols-2 gap-4 w-8/12 mx-auto'>
                    <label className="relative font-sans">
                        <img alt="card" src="../images/Victoria_Police_Station_-_Road_Blocker_Boom_Gate_1_240x240.avif" className=" flex h-60 w-full object-cover" />
                    </label>
                    <label className="relative font-sans flex">
                        <img alt="card" src="../images/Victoria_Police_Station_-_Road_Blocker_Boom_Gate_2_240x240.avif" className="h-60 flex w-full object-cover" />
                    </label>
                </div>

                <p className='text-xl'>
                We also service pre-existing bollard systems such as the Matador System. 
                </p>
            </div>

            <div className='space-y-10'>
                <h1 className='text-4xl font-bold text-[#ff8000] '>Our Services</h1>

                <div className='pl-20'>
                    <ul className='list-disc text-xl space-y-2'>
                        <li>Install and repair</li>
                        <li> Regular maintenance of HVM systems</li>
                        <li>Regular maintenance of Boom gates</li>
                        <li>Regular maintenance of Automatic Bollards (Hydraulic or Pneumatic)</li>
                        <li>Regular maintenance of Roadblocker systems</li>
                        <li>Regular maintenance of VMS screens</li>
                        <li>Regular maintenance of Matador Systems</li>
                    </ul>
                </div>
            </div>

    	</div>
        </>
  );
}

export default MaintenanceServices;