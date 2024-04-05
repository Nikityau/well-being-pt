import React from 'react';

import MainSideBar from "../../widgets/main-side-bar";
import PagesWrapper from "./pages-wrapper";

const PtWrapper = () => {
    return (
        <div className={'pt-wrapper'}>
            <MainSideBar/>
            <PagesWrapper/>
        </div>
    );
};

export default PtWrapper;