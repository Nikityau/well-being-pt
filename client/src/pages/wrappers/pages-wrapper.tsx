import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import InnerSideBar from "../../widgets/inner-side-bar";

const PagesWrapper = () => {

    const loc = useLocation()

    return (
        <div className={'pages-wrapper'}>
            <div className={'pages-wrapper__container'}>
                <Outlet/>
                {
                    !loc.pathname.includes('lecture') &&
                    <InnerSideBar/>
                }
            </div>
        </div>
    );
};

export default PagesWrapper;