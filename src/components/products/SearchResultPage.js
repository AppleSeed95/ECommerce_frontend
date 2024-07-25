import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import './Products.css';

import SearchFilter from './SearchFilter';
import SearchResult from './SearchResult';

import { ApiSettings } from '../../context/api-settings';
import SEO from '../common/seo';
import { Link } from 'react-router-dom';

const SearchResultPage = () => {
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
    var [isFilterVisible, setIsFilterVisible] = useState(false);
    const searchParams = new URLSearchParams(document.location.search)
    const [tabProd, setTabProd] = useState(true);
    const [tabPage, setTabPage] = useState(false);
    // const [queryStr,setQueryStr] = useState('');
    const [searchResult, setSearchResult] = useState({})
    const [pages, setSearchPageResult] = useState({})
    const [pageTotal, setSearchPageTotal] = useState(0)
    const [prods, setSearchProdResult] = useState({})
    const [prodTotal, setSearchProdTotal] = useState(0)
    var [totalRows, setResultCount] = useState(0);

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

    var loadCategories = async () => {
        let endPoint = hostUrl.getApiEndPoint(hostUrl, 'category/categories/' + params.category);
        const categoryResponse = await fetch(endPoint);
        try {
            const data = await categoryResponse.json();
            setCategory(data.data);
        } catch (e) {
            console.log(e)
        }
    }

    var loadCollections = async () => {
        let endPoint = hostUrl.getApiEndPoint(hostUrl, 'collections/filters');
        const collectionResponse = await fetch(endPoint);
        try {
            const data = await collectionResponse.json();
            setCollection(data.data);
        } catch (e) {
            console.log(e)
        }
    }

    var loadProducts = async () => {
        let productEndPoint = hostUrl.getApiEndPoint(hostUrl, 'products/category');
        var productFilterData = {
            category: params.category,
            pageLimit: perPage,
            sortOrder: sortOrder,
            search: searchKeyword,
            collections: collections,
            tags: tagsFilters,
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
        try {
            const productData = await productResponse.json();
            setProducts(productData.data);
            setResultCount(productData.totalRows);
        } catch (e) {
            console.log(e)
        }
    }

    var loadTags = async () => {
        let endPoint = hostUrl.getApiEndPoint(hostUrl, 'products/tags');
        const tagsResponse = await fetch(endPoint, { method: "POST" });

        try {
            const data = await tagsResponse.json();
            setTags(data.data);
        } catch (e) {
            console.log(e)
        }
    }

    const setTabValues = () => {
        setTabProd(true)
        setTabPage(false)
        // console.log('searchParams ', searchParams, searchParams.get('q'));
        if (searchParams.get('tab') == 'products') {
            setTabProd(true)
        }
        if (searchParams.get('tab') == 'pages') {
            setTabPage(true)
            setTabProd(false)
        }
    }

    const getSearchValues = async (value) => {
        setSearch(value)
        if (searchParams.get('tab') === 'products') {
            setTabProd(true)
        }
        if (searchParams.get('tab') === 'pages') {
            setTabPage(true)
            setTabProd(false)
        }

        let endPoint = hostUrl.getApiEndPoint(hostUrl, 'pages');
        let querysting = endPoint + '/search?q=' + value
        const search = await fetch(querysting)

        try {
            const data = await search.json();
            setSearchResult(data.data)
            setSearchPageResult(searchResult['pages']['rows'])
            setSearchPageTotal(searchResult['pages']['total'])
            
            setSearchProdResult(searchResult['products']['rows'])
            setSearchProdTotal(searchResult['products']['total'])
            // console.log(searchResult)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadCategories();
        loadCollections();
        loadTags();
        loadProducts();
        // setTabValues()
        getSearchValues(searchParams.get('q'));
    }, []);


    const handleCheckboxChange = (collectionItems) => {
        // console.log(collectionItems);
        const filterVal = collectionItems[0];
        const filterVal1 = collectionItems[1];
        const test = collections.includes(filterVal);
        // console.log(test);
        if (test) {
            let colArray = collections.filter((filter) => filter !== filterVal);
            let selColArray = selectedCollections.filter((filter1) => filter1 !== filterVal1);
            // console.log(collections);
            collections = colArray;
            selectedCollections = selColArray;
            setCollectionFilter(colArray);
            setSelectedCollections(selColArray);
        } else {
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
                <div className='space-y-6 py-10'>
                    <h1 className='text-4xl font-bold text-center '>Search Results</h1>
                </div>
                <div className='w-12/12 xl:w-9/12 mx-auto my-12  px-3 xl:px-0'>
                    <div className='border p-2'>
                        <div>
                            <Link to={`?q=${searchParams.get('q')}&tab=products`} className={`border p-1 pr-2 pl-2 mt-2 mb-2 ${tabProd && 'bg-slate-200'} mr-2`}>Products ({totalRows})</Link>
                            <Link to={`?q=${searchParams.get('q')}&tab=pages`} className={`border p-1 pr-2 pl-2 mt-2 mb-2 ${tabPage && 'bg-slate-200'}`}>Pages ({pageTotal})</Link>
                        </div>
                    </div>

                    {tabProd &&
                        <div className='lg:flex gap-6'>
                            <div className="w-full md:w-[19%] py-4 space-y-4">
                                {/* <SearchFilter collectionFilter={collectionFilter} tags={tags} getCollectionFilter={getCollectionFilter} getTagFilters={getTagFilters} />  */}
                                <SearchFilter collectionFilter={collectionFilter} tags={tags} onCollectionFilterChange={handleCheckboxChange} selectedCollections={selectedCollections} getTagFilters={getTagFilters} isFilterVisible={isFilterVisible} />
                            </div>
                            <div className="w-full lg:w-[75%] xl:w-[81%] py-4 space-y-4">
                                {/* <SearchResult resultPosts={products} setPerPage={setPerPage} setSortOrder={setSortOrder} setSearch={setSearch} /> */}
                                <SearchResult resultPosts={products} setTotalRows={totalRows} getPerPage={getPerPage} getSortOrder={getSortOrder} getSearch={getSearch} searchPage={``} />
                            </div>
                        </div>
                    }

                    {tabPage &&
                        <div className='gap-6'>
                            <div className='m-y-4'>
                                Showing {pageTotal} results for "{searchParams.get('q')}"
                            </div>

                            {pages.map((page)=>{
                                return (
                                    <>
                                        <div className='grid grid-cols-4 gap-4 border-b py-2 hover:bg-slate-50'>
                                            <div className="w-full md:w-[100%] py-4 space-y-4">
                                                <img src={page.image} alt={page.title} title={page.title} />
                                            </div>
                                            <div className="grid col-span-3 w-full md:w-[100%] py-4 space-y-4">
                                                <Link to={`blogs/blog/${page.slug}`} titel={page.title} alt={page.title} className='text-[#f89903] p-2'>{page.title}</Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    }
                </div>
            </div>

        </>
    );
};

export default SearchResultPage;