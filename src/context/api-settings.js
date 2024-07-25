import React from "react";
import { createContext } from 'react';
import {  useLocation } from "react-router-dom";

export const apiDetails = {
    imageHost: 'https://admin.australianbollards.net.au/',
    apiHost : 'https://admin.australianbollards.net.au/api/react/',
    apiVersion: 'v1',
    menuEndPoint : 'menu',
    bannerEndPoint : 'banner',
    getApiEndPoint : ( prop, endPoint ) => {
        return prop.apiHost + prop.apiVersion+'/'+endPoint;
    },
    imageNotAvailable : '/img/image-not-found-icon.svg',
    isShowDefaultImage : (prop,imgUrl) => {
      // this will only show the detault image if the image URL is empty
      let img = '';
      if( !imgUrl ){
        img = prop.imageNotAvailable;
      }else{
        img = imgUrl;
      }
      return img;
    }, 
    recordsPerPage:1,
    settings:[],
    useQuery:()=>{
      const { search } = useLocation();
      return React.useMemo(() => new URLSearchParams(search), [search]);
    }
  };

export const ApiSettings = createContext(apiDetails);
  
//   export const ApiSettings = React.createContext();