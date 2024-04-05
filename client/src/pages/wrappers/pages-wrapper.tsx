import React from 'react';
import {Outlet} from "react-router-dom";
import InnerSideBar from "../../widgets/inner-side-bar";

const PagesWrapper = () => {
    return (
        <div className={'pages-wrapper'}>
           <div className={'pages-wrapper__container'}>
               <Outlet/>
               <InnerSideBar/>
           </div>
        </div>
    );
};

export default PagesWrapper;