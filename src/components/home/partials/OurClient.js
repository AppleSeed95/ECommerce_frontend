import React, { useContext, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ApiSettings } from '../../../context/api-settings';
// import { Carousel } from "flowbite-react";

function OurClient(settings) {

    let appSettings = useContext(ApiSettings);
    const [images, setClient] = useState([]);
    const [sliederSetting, sliederShow] = useState({
        dots: true,
        infinite: true,
        // slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    var getClients = async () => {
        const endPoint = appSettings.getApiEndPoint(appSettings, 'setting');
        // console.log(endPoint + '/our_clients')
        const clients = await fetch(endPoint + '/our_clients');
        try {
            const data = await clients.json();
            setClient(data.data.our_clients);
            sliederShow({slidesToShow: (data.data.our_clients).length});
        } catch (e) {
            console.log(e)
        }
    }
    // const images = [
    //     './images/mastercard.webp',
    //     './images/vicroadslogolarge.webp',
    //     // './images/screen-shot.avif',
    //     './images/pin.webp',
    //     // './images/vicroadslogolarge.webp',
    //     // Add more image paths here
    // ];

    // const sliederSetting = {
    //     dots: true,
    //     infinite: true,
    //     // slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    // };

    useEffect(() => {
        getClients();
    }, []);
    return (
        <>
            <div className='px-2 lg:px-0 lg:w-9/12 pt-14 mx-auto space-y-8'>
                <h1 className='font-bold text-[36px] text-center'>
                    Our <span className='text-[#f89903]'>Client</span>
                </h1>

                <div className='w-full pt-10 pb-20'>
                    <Slider {...sliederSetting}>
                        {images.map((image, index) => (
                            <div key={index} className='gap-4'>
                                <img src={image} alt={`Slide ${index + 1}`} className='h-28 object-contain w-28' />
                            </div>
                        ))}
                    </Slider>
                    
                </div>
            </div>
        </>
    );
}
export default OurClient; 