import React, {useContext, useEffect, useState} from 'react';

import { Link } from 'react-router-dom'
import { ApiSettings } from '../context/api-settings';


const Footer = (settings) => {
	const apiDetails = useContext(ApiSettings);
	const [footer, setFooterData] = useState({"footer_contact":"", "footer_links":[]});

	const getFooterData = async ()=> {
		const apiEndPoint = apiDetails.getApiEndPoint(apiDetails, 'pages/footerData');
		const responce = await fetch(apiEndPoint)
		try{
			const data = await responce.json();
			setFooterData(data.data);
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(()=>{
		getFooterData();
	}, [])
	

    return (
    	<>
        <div className='bg-[#414141] h-[48rem] lg:h-[36rem]'>
            <div className='border-b border-gray-800 text-white'>
                <div className='pt-10 pb-20 gap-4 grid lg:grid-cols-3 px-2 lg:px-0 lg:w-10/12 mx-auto '>
                    <div className='text-lg tracking-wider space-y-5 flex flex-col'>
                        <label className='font-bold '>Contact Us</label>
                        <div dangerouslySetInnerHTML={{__html: footer.footer_contact }}></div>
                    </div>
                    <div></div>
                    <div className='text-lg tracking-wider space-y-4 flex flex-col'>
                        <label className='font-bold '>Information</label>
                        
                        <div className='flex flex-col space-y-1'>
                            {footer.footer_links.map((menu)=>(
                                <Link to={menu.seo_url} className='hover:underline' key={Math.random()}>{menu.name}</Link> 
                            ))}
                           {/* <Link to='#' className='hover:underline'>Contact</Link> 
                           <Link to='#' className='hover:underline'>Our Story</Link> 
                           <Link to='#' className='hover:underline'>Terms and Conditions</Link>  */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto pt-4 lg:pt-10 space-y-2 text-white'>
                <div className='md:flex justify-between gap-3'>
                    <label className='flex gap-3'>
                        <img src='../images/amex.webp' alt='amex' className='w-10 h-6 rounded object-cover' />
                        <img src='../images/apple-pay.webp' alt='pay' className='w-10 h-6 rounded-sm p-1 object-contain bg-white' />
                        <img src='../images/gpay.webp' alt='gpay' className='w-10 h-6 rounded-sm p-1 object-contain bg-white' />
                        <img src='../images/mastercard.webp' alt='mastercard' className='w-10 h-6 rounded-sm p-1 object-contain bg-white' />
                        <img src='../images/paypal-logo.webp' alt='paypal' className='w-10 h-6 rounded-sm object-contain bg-white' />
                        <img src='../images/visa.webp' alt='visa' className='w-10 h-6 rounded-sm p-1 object-contain bg-white' />
                    </label>

                    <label className='flex gap-10 items-center'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="#fff" d="M.89 0h14.23c.49 0 .88.39.88.88v14.24c0 .48-.39.88-.88.88h-4.08V9.8h2.08l.31-2.41h-2.39V5.85c0-.7.2-1.18 1.2-1.18h1.28V2.51c-.22-.03-.98-.09-1.86-.09-1.85 0-3.11 1.12-3.11 3.19v1.78H6.46V9.8h2.09V16H.89a.89.89 0 0 1-.89-.88V.88C0 .39.4 0 .89 0Z"/></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="17" fill="none"><path fill="#fff" d="M20.384 1.967a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 19.821.311c-.82.488-1.719.83-2.655 1.015A4.182 4.182 0 0 0 10.04 5.14 11.874 11.874 0 0 1 1.419.77a4.184 4.184 0 0 0 1.294 5.584 4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102 4.203 4.203 0 0 1-1.89.072 4.185 4.185 0 0 0 3.908 2.905A8.393 8.393 0 0 1 0 14.693a11.83 11.83 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9 0-.18-.004-.362-.012-.54a8.5 8.5 0 0 0 2.086-2.166Z"/></svg>


                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="none"><path fill="#fff" d="M15.7 1.727c-.2-.7-.7-1.2-1.4-1.4-2.1-.2-4.2-.4-6.3-.3-2.1 0-4.2.1-6.3.3-.6.2-1.2.8-1.4 1.4a37.08 37.08 0 0 0 0 9.4c.2.7.7 1.2 1.4 1.4 2.1.2 4.2.4 6.3.3 2.1 0 4.2-.1 6.3-.3.7-.2 1.2-.7 1.4-1.4.398-3.121.398-6.28 0-9.4ZM6 9.427v-6l5.2 3-5.2 3Z"/></svg>

                    </label>
                </div>

                <label className='md:flex justify-end text-sm'>
                © {new Date().getFullYear()}, {settings.settings.copyright_text}
                </label>
            </div>
    	</div>
        </>
  );
}

export default Footer;