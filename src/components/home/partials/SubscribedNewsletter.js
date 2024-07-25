import React, { useRef, useContext, useState, useEffect } from 'react';
import validator from 'validator'

import { ApiSettings } from '../../../context/api-settings';

const SubscribedNewsletter = () => {
    const appSettings = useContext(ApiSettings)
    const endPoint = appSettings.getApiEndPoint(appSettings, 'subscribe/save')

    const [emailError, setEmailError] = useState('') 
    const [inputValue, setInputValue] = useState("");
    const [response, setResponse] = useState("");
    // const count = useRef(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        if( validator.isEmail(inputValue) ){
            // console.log(inputValue);
            saveData()
            setEmailError('')
        }else{
            setResponse('');
            setEmailError('Enter valid Email!')
        }

    };

    const saveData = async () => {
        const responce = await fetch(endPoint, {
            method: "POST",
            body: JSON.stringify({ 'email': inputValue })
        })
        try {
            const data = await responce.json();
            setResponse(data.message);
            setInputValue('')
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
    }, [inputValue]);

    return (
        <>
            <div className="px-2 lg:px-0 lg:w-8/12 py-14 mx-auto space-y-8">
                <div className='space-y-6'>
                    <div>
                        <h1 className="font-bold text-[36px] text-center">
                            SUBSCRIBE TO OUR  <span className="text-[#f89903]">NEWSLETTER</span>
                        </h1>
                        <h4 className="text-xl text-center tracking-wider">
                            Get all the Information on Sales & Offers
                        </h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='md:w-8/12 mx-auto md:flex font-bold items-center gap-4 space-y-2 md:space-y-0 text-center text-green-500 mb-4' style={{fontWeight:'blod', }}>{response}</div>
                        <label className='md:w-8/12 mx-auto md:flex items-center gap-4 space-y-2 md:space-y-0'>
                            <input type='text' value={inputValue} className='h-14 px-10 border border-gray-500 placeholder:text-gray-300 w-full' placeholder='Enter your email address...'
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button type='submit' className='uppercase bg-[#f89903] h-14 px-4 hover:text-white w-full md:w-60'>SUBSCRIBE</button>`
                        </label>
                        <div className="md:w-8/12 mx-auto md:flex items-center gap-4 space-y-2 md:space-y-0 mt-3 text-center" style={{ fontWeight: 'bold', color: 'red', }}>{emailError}</div> 
                    </form>
                </div>
            </div>
        </>
    );
};

export default SubscribedNewsletter;