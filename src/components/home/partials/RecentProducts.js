import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { ApiSettings } from '../../../context/api-settings';

const RecentProducts = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const apiDetails = useContext(ApiSettings);
    const [recentProducts, setProds] = useState([]);

    var loadRecentProds = async () => {
        const apiEndPoint = apiDetails.getApiEndPoint(apiDetails, 'products/homepageRrecentProducts');
        // console.log(apiEndPoint)
        const responce = await fetch(apiEndPoint)
        try {
            const data = await responce.json();
            setProds(data.data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadRecentProds();
    }, []);


    return (
        <>
            <div className="px-2 lg:px-0 lg:w-9/12 py-14 mx-auto space-y-8">
                <div>
                    <h1 className="font-bold text-[36px] text-center">
                        RECENT <span className="text-[#f89903]">PRODUCTS</span>
                    </h1>
                    <h4 className="text-xl text-center tracking-wider">
                        Check out our Australian Made products
                    </h4>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full">
                        <ul className="xl:w-12/12 mx-auto md:flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row " role="tablist">

                            {recentProducts.map((post, i) => (
                                <li className="text-center flex flex-wrap">
                                    <a className={"text-xl lg:text-2xl font-semibold tracking-wide px-3 py-5 block leading-normal bg-white text-gray-800 " + (openTab === (i+1) ? "border-b-8 border-[#f89903]" : "border-b-8 border-[#fcdaa3]")} onClick={(e) => { e.preventDefault(); setOpenTab( i+1 ); }} href={`#link${(i+1)}`} role="tab" >
                                        {post.category}
                                    </a>
                                </li>

                            ))}
                        </ul>
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
                            <div className="py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    {recentProducts.map((post, i) => (
                                        <div className={openTab === (i+1) ? "block" : "hidden"} id={`link${(i+1)}`}>
                                            <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                                                {post.products.map((product) => (
                                                    <Link to={product.product_slug} className='flex flex-col space-y-3'>
                                                        <label className='h-72 shadow-lg p-2 flex'>
                                                            <img
                                                                alt={product.product_name}
                                                                src={product.product_image}
                                                                className="flex h-auto w-full object-cover"
                                                            />
                                                        </label>
                                                        <h2 className='text-xl lg:text-2xl font-semibold tracking-wide text-center'>
                                                            {product.product_name}
                                                        </h2>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default RecentProducts;
