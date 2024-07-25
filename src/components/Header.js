import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../App.css';
import MenuItems from './common/MenuItems';
import SearchResults from './common/SearchResults';

// import {apiDetails} from './context/api-settings';
import { ApiSettings } from '../context/api-settings';

function Header(settings) {
   const location = useLocation();
   const [searchValue, setSearchValue] = useState('')
   const [showSearchPopup, setSearchPopup] = useState(false)

   // Custom function to check if the current route matches a given route name
   const isActive = (routeName) => {
      return location.pathname === routeName;
   };
   let appSettings = useContext(ApiSettings);
   const [showModal, setShowModal] = React.useState(false);
   const [menus, setMenus] = useState([]);
   const [searchResult, setSearchResult] = useState({})
   // var loadMenu = false;
   var getMenusItems = async () => {
      let endPoint = appSettings.getApiEndPoint(appSettings,'menu');
      const response = await fetch(endPoint)
      try {
         const data = await response.json();
         setMenus(data.data)
      } catch (e) {
         console.log(e)
      }
   }

   const getSearchResult = (value) =>{
      setSearchValue(value)
      setSearchPopup(false)
      if(value){
         setSearchPopup(true)
         getSearchValues(value)
      }
   }
   
   const getSearchValues = async (value) =>{
      let endPoint = appSettings.getApiEndPoint(appSettings,'pages');
      let querysting = endPoint+'/search?q='+value
      const search = await fetch(querysting)

      try{
         const data = await search.json();
         setSearchResult(data.data)
         console.log(searchResult)
      }catch(e){
         console.log(e)
      }

   }
   // console.log(appSettings,settings, settings.settings.site_logo);
   useEffect(() => {
      getMenusItems();
   }, []);

   // const recursiveMenu = (data) => {

   //    console.log({ data });
   //    return data.map((items, i) => {
   //       console.log({ i, items });
   //       if (!items?.length) {
   //          //  return <Item key={Math.random()}>{item.name}</Item>;
   //          return <Link to={items.seo_url} className={isActive('/{items.route_name}') ? 'text-[#f89903]' : 'hover:text-[#f89903]'}>{items.name}</Link>;
   //       }

   //       return (
   //          <div key={Math.random()} title={items.name}>
   //             {recursiveMenu(menus)}
   //          </div>
   //       );
   //    });
   // };
 
   return (
      <div>
         <header className="md:flex px-8 lg:px-14 items-center py-6 border-b gap-4 lg:gap-0 justify-between space-y-3 md:space-y-0 font-semibold">
            <Link to='/' className="w-3/12">
               <img src={settings.settings.site_logo} key={Math.random()} alt={settings.settings.site_title} className="w-40 xl:w-48" />
            </Link>

            <MenuItems menu={menus} key={Math.random()} className='w-7/12 lg:w-6/12' />
           
            <div className="flex justify-end w-1/12 xl:w-2/12">
               <button type='button' onClick={() => setShowModal(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinejoin="round" strokeLinecap="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
               </button>
            </div>
         </header>

         {showModal ? (
            <>
               <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-x-0 top-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-full h-32 flex items-center justify-between bg-white px-20">

                     <div className="flex items-center gap-4 w-6/12 mx-auto">
                        <form action="pages/search-results-page" method="get" className='w-full'>

                           <label className='relative flex items-center'>
                              <input list="browsers" value={searchValue} placeholder='Search' name="q" id="browser" className='w-full ring-1 ring-gray-400 h-10 pl-6 pr-16' onChange={(e) => getSearchResult(e.target.value)} />
                              <datalist id="browsers" className='appearance-none list-none absolute z-50 w-full'>
                                 <option value="Edge" />
                                 <option value="Firefox" />
                                 <option value="Chrome" />
                                 <option value="Opera" />
                                 <option value="Safari" />
                              </datalist>
                              <label htmlFor='search' className="absolute inset-y-0 right-4 flex items-center">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinejoin="round" strokeLinecap="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                 </svg>
                                 <input type="submit" id='search' hidden />
                              </label>
                           </label>

                        </form>

                        <button type='button' className=""
                           onClick={() => setShowModal(false)}
                           >
                           <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                        </button>
                     </div>

                  </div>
               </div>
               {showSearchPopup && <SearchResults  key={Math.random()} result={searchResult} searchKey={searchValue} />}
               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
         ) : null}

      </div>

   );
}

export default Header;
