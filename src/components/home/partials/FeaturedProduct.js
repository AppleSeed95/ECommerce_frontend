import React, {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ApiSettings } from '../../../context/api-settings';

function FeaturedProduct () {

    const apiDetails = useContext(ApiSettings);
	const [products, setProds] = useState([]);

	var getFeaturedProds = async ()=>{
		const apiEndPoint = apiDetails.getApiEndPoint(apiDetails, 'products');
		// console.log(apiEndPoint);

		const responce = await fetch(apiEndPoint+'/feturedProducts/4')
		try{
			const data = await responce.json();
		} catch (e) {
			console.log(e)
		}
	}
	
	useEffect(()=>{
		getFeaturedProds();
	}, []);

    const images = [
        './images/website-cover-photo--marvel-1635305326736.webp',
        './images/featured-1.webp',
        // Add more image paths here
      ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    return (
        <>
        <div className='px-2 lg:px-0 lg:w-9/12 pt-14 mx-auto space-y-8'>
            <h1 className='font-bold text-[36px] text-center'>
                FEATURED <span className='text-[#f89903]'>PRODUCTS</span>
            </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                {products.map((product, index)=>(
                    <Link key={index} to={`/products/${product.product_slug}`} className='flex flex-col space-y-2'>
                        <label className='h-72 flex'>
                            <img alt={product.product_name} src={product.product_image} className="flex h-auto w-full object-cover" />
                        </label>
                        <h2 className='text-2xl tracking-wide underline'>
                            {product.product_name}
                        </h2>
                    </Link>
                    
                ))}
            </div>

            <div className='w-full pt-10 pb-20'>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} className='h-96 object-cover w-full' />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </>
    );
}
export default FeaturedProduct;