import React, {useContext, useEffect, useState} from 'react';

import { ApiSettings } from '../../../context/api-settings';

function VideoSection() {
	const apiDetails = useContext(ApiSettings);
	const [videos, setVideos] = useState([]);

	const getVideos = async ()=> {
		const apiEndPoint = apiDetails.getApiEndPoint(apiDetails, 'videos');
		const responce = await fetch(apiEndPoint)
		try{
			const data = await responce.json();
			setVideos(data.data);
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(()=>{
		getVideos();
	}, [])
	

  	return (
		<div className='grid md:grid-cols-2 gap-8 w-9/12 mx-auto py-10' key={Math.random()}>
			{videos.map((video)=>{
				let videoUrl = video.video_link+'?start='+video.video_start;
				return(
					<label className="h-80">
						<iframe width="100%" height="100%" src={videoUrl} title={video.video_title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
					</label>
				)
			})}
			{/* <label className="h-80">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9wUmWEu4fg0" title="Bollard Access Control - Mornington Esplanade" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
		    </label>
			<label className="h-80">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xxHRUH5OHEA" title="AB TRB 900 - Automatic 2 Stage Telescopic Bollard System - by Australian Bollards" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
		    </label>
			<label className="h-80">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/gmcB9D7QgRY" title="Australian Bollards   Man Cave 13 8 21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
		    </label>
			<label className="h-80">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sGY3dg3k0bQ" title="Pneumatic Bollards at Loreto Mandeville Hall - Keeping Our Future Leaders Safe" frameborder="0" 	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
		    </label>
			<label className="h-80">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sGY3dg3k0bQ" title="Pneumatic Bollards at Loreto Mandeville Hall - Keeping Our Future Leaders Safe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
		    </label>
			<label className="h-80">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/O4naqlnaD0I" title="Australian Bollards - Automatic Pneumatic Bollards AB-PB168-900S" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
		    </label> */}
	 	</div>
  	);
}

export default VideoSection;