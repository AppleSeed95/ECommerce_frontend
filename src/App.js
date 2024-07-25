import React, { useContext, useState, useEffect } from 'react';

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/home/Home';
import Products from './components/products/Products';
import SearchResultPage from './components/products/SearchResultPage';
import ProductInfo from './components/products/ProductInfo';
import Catalogue from './components/catalogue/Catalogue';
import MaintenanceServices from './components/maintenanceServices/MaintenanceServices';
import AboutUs from './components/ourCompany/AboutUs';
import OurCapabilities from './components/ourCompany/OurCapabilities';
import Faq from './components/ourCompany/Faq';
import TermsConditions from './components/ourCompany/TermsConditions';
import Blogs from './components/bolgs/Blogs';
import Blogtags from './components/bolgs/Blogtags';
import BlogInfo from './components/bolgs/BlogInfo';
import ContactUs from './components/contactUs/ContactUs';

import { ApiSettings } from './context/api-settings';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
// import context 
// import { apiDetails } from './context/api-settings';

function App() {

    const appSettings = useContext(ApiSettings);
    const hostUrl = appSettings.apiHost;
    const [showInfoHeader, setShowInfoHeader] = useState(true);
    const [settings, setSettings] = useState([]);
    const [blogTags, setTagsList] = useState([])
    const [fbUrl, updateShareLink] = useState(window.location.href)

    const handleBannerClose = () => {
        setShowInfoHeader(false);
    };

    var getSettings = async () => {
        let endPoint = appSettings.getApiEndPoint(appSettings, 'setting');
        const response = await fetch(endPoint)
        try {
            const data = await response.json();
            setSettings(data.data);
            appSettings.settings = settings;
            // console.log('app ', fbUrl, settings)
        } catch (e) {
            console.log(e)
        }
    }

    const shareLink = ()=> {
        updateShareLink(window.location.href)
    }

    const getBlogTags = async () => {
        let endPoint = appSettings.getApiEndPoint(appSettings, 'blogs/tags');
        const tag = await fetch(endPoint);
        try {
            let tagData = await tag.json();
            setTagsList(tagData.data);
        } catch (e) {
            console.log(e)
        }
    }

    // const hosturl = 'http://127.0.0.1:8000/api/v1';
    useEffect(() => {
        const delay = 3000; // Delay in milliseconds before showing the banner
        let timeoutId;

        const showDelayedBanner = () => {
            timeoutId = setTimeout(() => {
                setShowInfoHeader(true);
            }, delay);
        };

        showDelayedBanner();
        getSettings();
        getBlogTags();

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div>
                {showInfoHeader && (
                    <div className="sticky top-0 bg-[#686a6b] text-white flex justify-between px-4 items-center z-50 md:h-14">
                        <label className='text-xs -rotate-90'>Yeps</label>
                        <div className='flex flex-wrap gap-2 justify-center'>
                            <p className='text-sm font-semibold '>
                                {settings.header_trip_text}
                            </p>

                            <label className='flex items-center gap-1 text-sm font-semibold'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" /></svg>
                                Call Us + 613 9459 3488
                            </label>

                            <label className='flex gap-2 items-center text-xs'>
                                <FacebookShareButton url={fbUrl}>
                                    <div className='fb-share-button bg-gray-200 uppercase py-1 flex justify-center items-center px-2 font-bold gap-1 rounded-sm tracking-wide text-gray-700'>
                                        <img src="../images/fb.webp" alt="AusBollards Logo" className="w-4 h-4" /> Share
                                    </div>
                                </FacebookShareButton>
                                <TwitterShareButton url={fbUrl}>
                                    <div className='bg-gray-200 uppercase py-1 flex justify-center items-center px-2 font-bold gap-1 rounded-sm tracking-wide text-gray-700'>
                                        <img src="../images/tweet.webp" alt="AusBollards Logo" className="w-4 h-4" />
                                        Tweet
                                    </div>
                                </TwitterShareButton>
                            </label>
                        </div>
                        <button type="button" onClick={handleBannerClose}>
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                )}

                <Header settings={settings} />

                <Routes>
                    <Route path="/" element={<Home />} name="home" />
                    {/* <Route path="/collections/all" element={<Products />} /> */}
                    <Route path="/collections/:category" element={<Products />} />
                    <Route path="/collections/:category/products/:productSlug" element={<ProductInfo />} />
                    <Route path="/products/:productSlug" element={<ProductInfo />} />
                    <Route path="/collections" element={<Catalogue />} />
                    <Route path="/pages/maintenance" element={<MaintenanceServices />} />
                    <Route path="/pages/about-us" element={<AboutUs />} />
                    <Route path="/pages/our-capabilities" element={<OurCapabilities />} />
                    <Route path="/apps/help-center" element={<Faq />} />
                    <Route path="/pages/terms-and-conditions" element={<TermsConditions />} />
                    <Route path="/blogs/blog/" element={<Blogs tagLists={blogTags} />} />
                    <Route path="/blogs/blog/tagged/:tag" element={<Blogtags tags={blogTags} />} />
                    <Route path="/blogs/blog/:blogSlug" element={<BlogInfo />} />
                    <Route path="/pages/contact-us" element={<ContactUs />} />
                    <Route path="/pages/:slug" element={<AboutUs />} />
                    <Route path="/pages/search-results-page" element={<SearchResultPage />} />
                </Routes>

                <Footer settings={settings} />

                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed bottom-10 right-6 z-50 outline-none focus:outline-none" >
                    <div className="relative w-16 flex flex-col gap-2">

                        <Link to='/' type='button' className='custom_icon w-10 h-10 flex justify-center items-center bg-white border drop-shadow-md transform hover:-translate-1 hover:scale-105 transition duration-100'>
                            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                        </Link>
                        <Link to={`mailto:${settings.contact_email}`} className='custom_icon w-10 h-10 flex justify-center items-center bg-white border drop-shadow-md transform hover:-translate-1 hover:scale-105 transition duration-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                        </Link>
                        <Link to={`tel:${settings.contact_phone}`} className='custom_icon w-10 h-10 flex justify-center items-center bg-white border drop-shadow-md transform hover:-translate-1 hover:scale-105 transition duration-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" /></svg>
                        </Link>
                        <button onClick={handleScrollToTop} type='button' className='custom_icon w-10 h-10 flex justify-center items-center bg-gray-800 border drop-shadow-md transform hover:-translate-1 hover:scale-105 transition duration-100'>
                            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" /></svg>
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default App;
