import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";

const MenuItems = ({ menu, ischild }) => {
    const location = useLocation();
    const isActive = (routeName) => {
        return location.pathname === routeName;
    };
    let ulCls = 'main-menu';
    if(ischild==1){
        ulCls = 'child-menu';
    }

    return (
        <>
        <ul className={ulCls} key={Math.random()}>
            {menu.map((item) => {
                if (!item.children) {
                    return (
                        <>
                            <li key={Math.random()}>
                                <Link key={Math.random()} to={item.seo_url} className={isActive('{item.route_name}') ? 'text-[#f89903]' : 'hover:text-[#f89903]'}>{item.name}</Link>
                            </li>
                        </>
                    )
                } else {
                    return (
                        <>
                            <li key={Math.random()} className="child">
                                <Link key={Math.random()} to={item.seo_url} className={isActive('{item.seo_url}') ? 'text-[#f89903] flex items-center gap-2' : 'flex hover:text-[#f89903] items-center gap-2'}
                                >{item.name}
                                    <svg key={Math.random()} xmlns="http://www.w3.org/2000/svg" className="fill-current h-4 w-4  hover:text-[#f89903] transform " viewBox="0 0 20 20"><path d="m9.293 12.95.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </Link>
                                {item.children && <MenuItems menu={item.children} ischild="1"  key={Math.random()} />}
                            </li>
                        </>
                    )
                }
            })
            }
        </ul>
        </>
    );
}

export default MenuItems;
