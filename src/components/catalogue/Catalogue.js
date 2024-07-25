import React from 'react';
import {Helmet} from "react-helmet";

const data = [
    {
      imagePath: "./images/featured-1.webp",
      text: "Access Control System 1",
    },
    {
      imagePath: "./images/featured-2.webp",
      text: "Access Control System 2",
    },
    {
      imagePath: "./images/featured-3.webp",
      text: "Access Control System 3",
    },
    // Add more objects as needed
  ];
  

const Catalogue = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Collection</title>
            <link rel="canonical" href="https://australianbollards.com.au/collections" />
            <meta name="description" content="Explore our diverse collection of high-quality products for various applications." />
         </Helmet>
    	<div className='w-10/12 py-16 mx-auto space-y-16'>
            <h1 className='text-4xl font-bold text-center '>Collections</h1>

            <div className='grid grid-cols-4 gap-6'>
            {data.map((item, index) => (
                <label key={index} className="relative font-sans">
                    <img alt="card" src={item.imagePath} className=" flex h-72 w-full object-cover rounded-md" />
                    <div className='absolute inset-0 flex justify-center items-center h-full bg-black bg-opacity-30 rounded-md'>
                        <div className='flex flex-col space-y-8 w-11/12 mx-auto  '>
                            <h1 className='text-3xl text-white font-bold text-center flex items-center justify-center h-24'> {item.text}</h1>
                        </div>
                    </div>
                </label>
             ))}

            </div>
    	</div>
        </>
  );
}

export default Catalogue;