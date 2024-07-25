import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import { ApiSettings } from '../../../context/api-settings';

function BannerSection() {

	const apiDetails = useContext(ApiSettings);
	const [bannerSection, setBannerSection] = useState([]);
	const [imgBanners, setImgBanners] = useState([]);

	var loadBanners1 = async () => {
		const apiEndPoint = apiDetails.getApiEndPoint(apiDetails, 'banners');
		const imgBannerResponce = await fetch(apiEndPoint + '/banner/imageBanners');

		try {
			const bannerData = await imgBannerResponce.json();
			// console.log(bannerData);
			setImgBanners(bannerData.data);
		} catch (e) {
			console.log(e)
		}

		const bannerSectionResponce = await fetch(apiEndPoint + '/banner/home page');
		try {
			const data = await bannerSectionResponce.json();
			console.log(data);
			setBannerSection(data.data);
		} catch (e) {
			console.log(e)
		}
	}

	var banner2 = async () => {

	}

	useEffect(() => {
		banner2();
		loadBanners1();
	}, []);

	return (
		<>
			<div key={Math.random()}>
				{bannerSection.map((bannerHead) => {
					return (
						<>
							<div className="relative font-sans mt-20 md:mt-0" key={Math.random()}>
								<img alt={bannerHead.banner_name} src={bannerHead.banner_image} className="border-t border-b flex object-cover h-96 lg:h-auto w-full" />
								<div dangerouslySetInnerHTML={{ __html: bannerHead.banner_html }} className='bg-[#404040] bg-opacity-60 absolute inset-0 flex justify-center items-center z-30' />
							</div>
						</>
					)
				})}

				<div className='pt-4 space-y-9 flex flex-col lg:w-9/12 mx-auto'>
					{
						imgBanners.map((banner) => {
							return (
								<Link to={banner.banner_link} className='w-full'>
									<img alt="extra-heavy" src={banner.banner_image} className="border flex h-96-1 w-full object-fill" />
								</Link>
							)
						})
					}
					{/* <Link to='#' className='w-full'>
						<img alt="banner" src="./images/ab8800designerintercomwebsite-1668146881412.webp" className="border flex h-96 w-full object-fill" />
					</Link>
					<Link to='#' className='w-full'>
						<img alt="banner" src="./images/200kph-header-option-2-1673414923790.webp" className="border flex h-96 w-full object-fill" />
					</Link> */}

				</div>
			</div>
		</>
	);
}

export default BannerSection;