import React from 'react';
import {Outlet} from "react-router-dom";

import MainSideBar from "../../widgets/main-side-bar";

const PtWrapper = () => {
    return (
        <div className={'pt-wrapper'}>
            <MainSideBar/>
            <Outlet/>
        </div>
    );
};

export default PtWrapper;