import React, { useState, useContext, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet";
import validator from 'validator'
import './ContactUs.css';

import ReCAPTCHA from 'react-google-recaptcha';
import { ApiSettings } from '../../context/api-settings';

const ContactUs = () => {

	const apiDetails = useContext(ApiSettings);
	const [recentProducts, setProds] = useState([]);
	const [isVerified, setIsVerified] = useState(false);
	const [responce, setResponse] = useState(false);
	const endPoint = apiDetails.getApiEndPoint(apiDetails, 'subscribe/saveContact')
	const [frmData, setFormData] = useState(false);
	const [showError, setError] = useState(false);
	
	const [phoneError, setErPhone] = useState(false);
	const [nameError, setErName] = useState(false);
	const [emailError, setErEmail] = useState(false);
	const [installError, setErInstall] = useState(false);
	const [msgError, setErMsg] = useState(false);
	const [zipError, setErZip] = useState(false);
	
	const form = useRef(null)

	const handleRecaptchaChange = (value) => {
		// Verify the reCAPTCHA response
		if (value) {
			setIsVerified(true);
		} else {
			setIsVerified(false);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let frmValid = true
		const data = new FormData(form.current)
		// setFormData(data)
		// console.log('fata', JSON.stringify(data));		
		
		setErName(false);
		setErPhone(false);
		setErEmail(false);
		setErInstall(false);
		setErMsg(false);
		setErZip(false);

		if( validator.isEmpty(data.get('name'))){
			frmValid = false
			setErName(true);
		}
		if( !validator.isMobilePhone(data.get('phone'))){
			frmValid = false
			setErPhone(true);
		}
		if( !validator.isEmail(data.get('email'))){
			frmValid = false
			setErEmail(true);
		}
		if( data.get('installation1') === null){
			frmValid = false
			setErInstall(true);
		}
		if(data.get('postcode')==='undefined' ){
			frmValid = false
			setErZip(true);
		}
		if( validator.isEmpty(data.get('message')) || !validator.isAlphanumeric(data.get('message'))){
			frmValid = false
			setErMsg(true);
		}
		if(!frmValid){
			setError(true)
		}
		setFormData(frmValid);

		// Check if reCAPTCHA is verified
		if ( isVerified && frmValid ) {
			// Perform your form submission logic here
			console.log('Form submitted!');

			const contactFrm = await fetch(endPoint, {
				method: 'post',
				body: data
			})
			try {
				const data = await contactFrm.json();
				setResponse(data.message);
				// setInputValue('')
				setError(false)
			} catch (e) {
				console.log(e)
			}

		} else {
			// reCAPTCHA not verified, show an error message or take appropriate action
			console.log('Please verify the reCAPTCHA');
		}
	};


	var loadRecentProds = async () => {
		const apiEndPoint = apiDetails.getApiEndPoint(apiDetails, 'pages/contact-us');
		const responce = await fetch(apiEndPoint)
		try {
			const data = await responce.json();
			setProds(data.data[0]);
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		loadRecentProds();
	}, [frmData]);


	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{recentProducts.page_title}</title>
				<link rel="canonical" href="https://australianbollards.com.au/pages/contact-us" />
				<meta name="description" content={recentProducts.meta_desc} />
			</Helmet>
			<div className='w-full lg:w-7/12 px-3 lg:px-0 mx-auto py-10 space-y-10'>
				<h1 className='text-4xl font-bold text-center'>Contact Us</h1>

				<div className='space-y-5 flex flex-col'>
					<div className='space-y-4' dangerouslySetInnerHTML={{ __html: recentProducts.description }}>
					</div>
				</div>


				<div className=' p-10 border border-gray-400 rounded-sm'>
					<form className='space-y-5 flex flex-col' ref={form} onSubmit={handleSubmit}>
						<h1 className='text-3xl font-bold'>Contact Us</h1>
						<div className="alert_message" style={responce ? {} : { display: 'none' }} > 
							<div id="thank-you-alert" className="bg-green-100 bg-clip-border p-4 rounded-md border-green-600 text-green-400" role="alert" >
								{/* <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> */}
								{responce}
							</div>
						</div>
						<div className="alert_message" style={showError ? {} : { display: 'none' }} > 
							<div id="thank-you-alert" className="bg-red-100 bg-clip-border p-4 rounded-md border-red-600 text-red-400" role="alert" >
								{/* <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>								 */}
								<div>{!nameError?'':'Name is required.'}</div>
								<div>{!phoneError?'':'Phone is required.'}</div>
								<div>{!emailError?'':'Email is required.'}</div>
								<div>{!installError?'':'Installation Required is required.'}</div>
								<div>{!zipError?'':'Postcode is required.'}</div>
								<div>{!msgError?'':'Message is required.'}</div>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-10'>
							<label className='flex flex-col gap-2'>
								<span>Name*</span>
								<input type='text' name="name" className={`ring-1 p-1 pl-2 rounded-sm h-10 ${!nameError?'ring-gray-300':'error'}`} />
							</label>
							<label className='flex flex-col gap-2'>
								<span>Phone*</span>
								<input type='text' name="phone" className={`ring-1 p-1 pl-2 rounded-sm h-10 ${!phoneError?'ring-gray-300':'error'}`} />
							</label>
						</div>
						<div className='grid grid-cols-2 gap-10'>
							<label className='flex flex-col gap-2'>
								<span>Email*</span>
								<input type='text' name='email' className={`ring-1 p-1 pl-2 ${!emailError?'ring-gray-300':'error'} rounded-sm h-10  `} />
							</label>
							<label className='flex flex-col gap-2'>
								<span>Installation Required*</span>
								<div className='flex gap-10'>
									<label className='flex gap-2 items-center'>
										<input type='radio' name='installation1' value="Yes" className='' />
										Yes
									</label>
									<label className='flex gap-2 items-center'>
										<input type='radio' name='installation1' value="No" className='' />
										No
									</label>
								</div>
							</label>
						</div>
						<div className='grid grid-cols-2 gap-10'>
							<label className='flex flex-col gap-2'>
								<span>Postcode*</span>
								<input type='text' name="postcode" className={`ring-1 p-1 pl-2 rounded-sm h-10 ${!zipError?'ring-gray-300':'error'}`} />
								Postcode for Delivery/Installation
							</label>
							<label className='flex flex-col gap-2'>
								<span>Product Name</span>
								<input type='text' name="product" className="ring-1 p-1 pl-2 rounded-sm h-10 ring-gray-300" />
							</label>
						</div>
						<label className='col-span-2 flex flex-col gap-2'>
							<span>Message*</span>
							<textarea rows="3" name='message' className={`ring-1 p-1 pl-2 ${!msgError?'ring-gray-300':'error'} rounded-sm`}></textarea>
						</label>

						<label className='italic'>Postcode for Delivery/Installation</label>

						<ReCAPTCHA sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR" onChange={handleRecaptchaChange} />

						<button type='submit' className='bg-[#333333] text-white font-bold w-full rounded-sm h-12 text-base'>
							Submit
						</button>
					</form>
				</div>

			</div>
		</>
	);
};

export default ContactUs;