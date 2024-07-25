import React, { useEffect, useState, useContext }  from 'react';
import { useParams } from 'react-router';
import './Products.css';

import SearchFilter from './SearchFilter';
import SearchResult from './SearchResult';

import { ApiSettings } from '../../context/api-settings';
import SEO from '../common/seo';

const Products = () => {
    const params = useParams();
    const hostUrl = useContext(ApiSettings);
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [perPage, setPerPage] = useState(12);
    const [sortOrder, setSortOrder] = useState('a-z');
    const [searchKeyword, setSearch] = useState('');
    const [collectionFilter, setCollection] = useState([]);
    const [tags, setTags] = useState([]);
    var [collections, setCollectionFilter] = useState([]);
    var [selectedCollections, setSelectedCollections] = useState([]);
    var [tagsFilters, setTagFilters] = useState([]);
    var [totalRows, setResultCount] = useState(0);
    var [isFilterVisible, setIsFilterVisible] = useState(false);
    let location = window.location;
    
    const getPerPage = (perPageCount) => {
        setPerPage(perPageCount);
        loadProducts();
    }
    
    const getSortOrder = (sortOrder) => {
        setSortOrder(sortOrder);
        loadProducts()
    }
    
    const getSearch = (searchText) => {
        setSearch(searchText);
        loadProducts();
    }

    // const getCollectionFilter = (sortOrder) => {
    //     setCollectionFilter(sortOrder);
    //     loadProducts()
    // }

    const getTagFilters = (tagFilter) => {
        // console.log(tagFilter);
        setTagFilters(tagFilter);
        // console.log(tagsFilters);
        loadProducts();
    }

    var loadCategories = async ()=> {
        let endPoint = hostUrl.getApiEndPoint(hostUrl, 'category/categories/'+params.category);
        const categoryResponse = await fetch(endPoint); 
		try{
			const data = await categoryResponse.json();
			setCategory(data.data);
		} catch (e) {
			console.log(e)
        }
    }

    var loadCollections = async ()=> {
        let endPoint = hostUrl.getApiEndPoint(hostUrl, 'collections/filters');
        const collectionResponse = await fetch(endPoint); 
		try{
			const data = await collectionResponse.json();
			setCollection(data.data);
		} catch (e) {
			console.log(e)
        }
    }

    var loadProducts = async ()=> {
        let productEndPoint = hostUrl.getApiEndPoint(hostUrl, 'products/category');
        var productFilterData = {
            category:params.category,
            pageLimit:perPage,
            sortOrder:sortOrder,
            search:searchKeyword,
            collections:collections,
            tags:tagsFilters,
        };
		const productResponse = await fetch(productEndPoint, {
            method: "POST",
            mode: "cors", // no-cors, *cors, same-origin
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(productFilterData)
        }); 
        try{
			const productData = await productResponse.json();
			setProducts(productData.data);
			setResultCount(productData.totalRows);
		} catch (e) {
			console.log(e)
        }
    }

    var loadTags = async ()=> {
        let endPoint = hostUrl.getApiEndPoint(hostUrl, 'products/tags');
        const tagsResponse = await fetch(endPoint, {method: "POST"}); 
        
		try{
			const data = await tagsResponse.json();
			setTags(data.data);
		} catch (e) {
			console.log(e)
        }
    }

    useEffect(()=>{
		loadCategories();
        loadCollections();
        loadTags();
        loadProducts();
	}, []);


    const handleCheckboxChange = (collectionItems) => {
        // console.log(collectionItems);
        const filterVal = collectionItems[0];
        const filterVal1 = collectionItems[1];
        const test = collections.includes(filterVal);
        // console.log(test);
        if(test){
            let colArray = collections.filter((filter) => filter !== filterVal);
            let selColArray = selectedCollections.filter((filter1) => filter1 !== filterVal1);
            // console.log(collections);
            collections = colArray;
            selectedCollections = selColArray;
            setCollectionFilter(colArray);
            setSelectedCollections(selColArray);
        }else{
            // console.log(filterVal);
            // setCollectionFilter([...collections, filterVal]);
            collections[(collections.length)] = filterVal;
            selectedCollections[(selectedCollections.length)] = filterVal1;
            // setSelectedCollections([...selectedCollections, filterVal1]);
        }
        // console.log(collections);
        // console.log(selectedCollections);
        loadProducts();
        setIsFilterVisible(true);
    }

	return (
        <>
           
        <SEO title={category[0]?.meta_title || ''} description={category[0]?.meta_desc || ''} name="" type="" />
        <div className=''>
            {/* --- {JSON.stringify(category)}--- */}
            {/* {JSON.stringify(category[0])} */}
            <img
                src={ hostUrl.imageHost + category[0]?.category_image} 
                className="w-full object-cover h-60"
                alt={category[0]?.category_name}
                />
            <div className='space-y-6 border-b  py-10'>
                <h1 className='text-4xl font-bold text-center '>{category[0]?.category_name}</h1>
                <div className='w-12/12 xl:w-9/12 mx-auto my-12  px-3 xl:px-0' dangerouslySetInnerHTML={{ __html: category[0]?.category_desc}} />
            </div>

            <div className='w-12/12 xl:w-9/12 mx-auto my-12  px-3 xl:px-0'>
                <div className='lg:flex gap-6'>
                    <div className="w-full md:w-[19%] py-4 space-y-4">
                        {/* <SearchFilter collectionFilter={collectionFilter} tags={tags} getCollectionFilter={getCollectionFilter} getTagFilters={getTagFilters} />  */}
                        <SearchFilter collectionFilter={collectionFilter} tags={tags} onCollectionFilterChange={handleCheckboxChange} selectedCollections={selectedCollections} getTagFilters={getTagFilters} isFilterVisible={isFilterVisible} /> 
                    </div>
                    <div className="w-full lg:w-[75%] xl:w-[81%] py-4 space-y-4">
                        {/* <SearchResult resultPosts={products} setPerPage={setPerPage} setSortOrder={setSortOrder} setSearch={setSearch} /> */}
                        <SearchResult resultPosts={products} setTotalRows={totalRows} getPerPage={getPerPage} getSortOrder={getSortOrder} getSearch={getSearch} />
                    </div>
                </div>
            </div>
        </div>
        
        </>
	);
 };
 
 export default Products;