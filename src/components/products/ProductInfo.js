import React, { useEffect, useState, useContext }from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import { ApiSettings } from '../../context/api-settings';
import SEO from '../common/seo';

const ProductInfo = () => {
    const params = useParams();
    const hostUrl = useContext(ApiSettings);
    const [product, setProducts] = useState([]);
    const [images, setProductImages] = useState([]);
    const [docs, setProductDocs] = useState([]);
    
    const [showContent, setShowContent] = useState(false);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    const [mainImage, setMainImage] = useState([]);


    const handleImageClick = (image) => {
        setMainImage(image);
    };

    // 
    var loadProduct = async ()=> {
        let productEndPoint = hostUrl.getApiEndPoint(hostUrl, 'products/'+params.productSlug);
		var productFilterData = {
            category:params.category,
            productSlug:params.productSlug
        };

		const productResponse = await fetch(productEndPoint, {
            method: "POST",
            mode: "cors", // no-cors, *cors, same-origin
            credentials: "same-origin", // include, *same-origin, omit
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(productFilterData)
        }); 

		try{
            const productData = await productResponse.json();
			setProducts(productData.data[0]);
			setProductImages(productData.data[0].product_images_only);
			setProductDocs(productData.data[0].product_docs_only);
            setMainImage(productData.data[0].product_image);
            // console.log(product.product_docs_only);

		} catch (e) {
			console.log(e)
        }
    }

    useEffect(()=>{
        loadProduct();
        // load the js code block 
        // const script = document.createElement('script');
        // script.src = "/js/product.js";
        // script.async = true;
        // document.body.appendChild(script);
        
        // const readMoreBtn =  Array.from(
        //     document.querySelectorAll('button.active')
        // );
        // const contentDiv =  Array.from(
        //     document.querySelectorAll('div.content')
        // );
        // // readMoreBtn.array.forEach(element => {
        // //     element.style.backgroundColor = 'salmon';
        // // });
        // // Check if the element exists before adding the event listener
        // if (readMoreBtn) {
        //     readMoreBtn.forEach(element => {
        //         element.addEventListener('click', toggleContent);
        //     });
        //     // // Clean up the event listener when the component unmounts
        //     // return () => {
        //     //   readMoreBtn.removeEventListener('click', toggleContent);
        //     // };
        // }
        // return () => {
        //   document.body.removeChild(script);
        // }

    }, []);
    
	return (
        <>
        <SEO title={product?.meta_title || ''} description={product?.meta_desc || ''} name="" type="" />
        <div className='px-6 lg:px-0 lg:w-10/12 mx-auto py-14'>
            <div className='grid md:grid-cols-2 md:gap-6'>
                <div className='space-y-3 flex flex-col'>
                    <img
                        src={hostUrl.imageHost+mainImage}  
                        className="w-full h-96 object-contain"
                        alt="Blog Banner"
                        />

                    <div className='mb-20 flex gap-3'>
                        {images.map((image, index) => (
                            <button key={index} type="button"
                            className={`border ${mainImage === image ? 'border-black w-28 p-0.5' : 'border-transparent w-28 hover:opacity-80'}`}
                            onClick={() => handleImageClick(image.image_path)}>
                            <img
                                src={hostUrl.imageHost+image.image_path} alt={image.image_title}
                                className='w-full h-24 object-cover'/>
                            </button>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col space-y-6'>
                    <div className='flex flex-col mb-4'>
                        <h1 className='text-4xl font-bold'>{product.product_name}</h1>
                        <label>{product.sku}</label>
                        <label className='uppercase text-base tracking-wide'>{product.vendor_name}</label>
                    </div>
                    <Link to="/contact-us" className="flex justify-center bg-[#f89903] hover:bg-yellow-600 uppercase text-base w-9/12 items-center h-12 rounded-sm font-bold tracking-wider">Enquire Now</Link>
                    {docs.map( ( doc ) => (
                        <Link key={Math.random()} to={hostUrl.imageHost+doc.image_path} download={doc.file_name} target='_blank' className='border h-16 flex items-center px-4 w-7/12 gap-1'>
                            <img src='/images/pdfIcon.avif' className='w-8 -mt-1' />
                            <h3 className='border-b border-black mt-2 text-base truncate'>{doc.file_name}</h3>
                        </Link>
                    ) ) }

                    <div className='pt-2 flex gap-2'>
                        <Link to='#' className='border border-gray-300 hover:border-gray-400 text-sm uppercase h-9 flex justify-center items-center w-24 font-bold gap-2 rounded-sm tracking-wide'>
                        <img src="/images/fb.webp" alt="AusBollards Logo" className="w-4 h-4" />
                        Share
                        </Link>
                        <Link to='#' className='border border-gray-300 hover:border-gray-400 text-sm uppercase h-9 flex justify-center items-center w-24 font-bold gap-2 rounded-sm tracking-wide'>
                        <img src="/images/tweet.webp" alt="AusBollards Logo" className="w-4 h-4" />
                        Tweet
                        </Link>
                        <Link to='#' className='border border-gray-300 hover:border-gray-400 text-sm uppercase h-9 flex justify-center items-center w-24 font-bold gap-2 rounded-sm tracking-wide'>
                        <img src="/images/pin.webp" alt="AusBollards Logo" className="w-4 h-4" />
                        Pin It
                        </Link>
                    </div>
                </div>
            </div>

            <div className='py-10 flex flex-col gap-4 product-description'  dangerouslySetInnerHTML={{__html:  product.product_desc }}>

                {/* <button type='button' onClick={toggleContent}className='text-blue-600 hover:text-[#f89903] mt-4'>---- Read More ----</button>
                {showContent && (
                <div className='flex flex-col gap-2'>
                    <label className='text-[#f89903] font-bold italic'>
                        Whether it be for  
                    </label>
                    <p>
                    Pedestrian & Vehicle Control Bollards, Medium Duty “Energy Absorbing” Control Bollards Vehicle No Parking & No Entry Control Bollards, Medium or Heavy Duty  “Energy Absorbing” Control Bollards, Property & Asset Protection Bollards, Heavy Duty “Energy Absorbing” Protecting Bollards, Security & Defence Bollards or High  Duty “Impact Attack” Defence Bollards. 
                    </p>
                </div>
                )} */}
            </div>
        </div>


        
        </>
	);
 };
 
 export default ProductInfo;