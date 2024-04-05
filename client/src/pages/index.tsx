import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import PtWrapper from "./wrappers/pt-wrapper";
import LoginPage from "./login";
import MainPage from "./main-page";
import ArchivePage from "./archive-page";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/well-being'}>
                <Route path={'pt'} element={<PtWrapper/>}>
                    <Route path={'main'} element={<MainPage/>}/>
                    <Route path={'notifications'} element={'notifications'}/>
                    <Route path={'archive'} element={<ArchivePage/>}/>
                </Route>
                <Route path={'login'} element={<LoginPage/>}/>

                <Route path={''} element={<Navigate to={'pt'}/>}/>
            </Route>
            <Route path={'/'} element={<Navigate to={'/well-being'}/>}/>
        </Routes>
    );
};

export default AppRouter;