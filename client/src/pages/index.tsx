import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import PtWrapper from "./wrappers/pt-wrapper";
import LoginPage from "./login";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/well-being'}>
                <Route path={'pt'} element={<PtWrapper/>}>
                    <Route path={'main'} element={'main'}/>
                    <Route path={'notifications'} element={'notifications'}/>
                </Route>
                <Route path={'login'} element={<LoginPage/>}/>

                <Route path={''} element={<Navigate to={'pt'}/>}/>
            </Route>
            <Route path={'/'} element={<Navigate to={'/well-being'}/>}/>
        </Routes>
    );
};

export default AppRouter;