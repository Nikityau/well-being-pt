import React from "react";

import RouterProvider from "./provider/router-provider";
import StoreProvider from './provider/store-provider'
import AppRouter from "../pages";

import './style/index.scss'

const App = () => {
    return (
       <div className={'app'}>
           <AppRouter/>
       </div>
    );
};

export default StoreProvider(RouterProvider(<App/>));