import React from 'react';

import {TAppStore} from "../../redux/types/store";

import PagesNavigation from "../../features/pages-navigation";
import MiniUser from "../../entities/mini-user";
import RenderWatcher from "../../shared/helpers/render-watcher";
import LogInOutBtn from "../../features/log-in-out-btn";

import './style/index.scss'

const MainSideBar = () => {
    return (
        <div className={'main-side-bar'}>
            <div className={'main-side-bar__container'}>
                <MiniUser/>
                <RenderWatcher
                    watcher={(store: TAppStore) => store.user.role !== "guest"}
                    render={(isRender: boolean) => {
                        if(!isRender) return <div/>
                        return (
                            <PagesNavigation/>
                        )
                    }}
                />
                <LogInOutBtn/>
            </div>
        </div>
    );
};

export default MainSideBar;