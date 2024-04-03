import React, {useEffect, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";

import {nav} from "./data/nav";

import Pointer from "./ui/pointer";

import NavBlock from "../../entities/nav-block";
import NavBlockInner from "../../entities/nav-block-inner";
import RenderWatcher from "../../shared/helpers/render-watcher";
import NumberCircle from "../../entities/number-circle";

import './style/index.scss'

const PagesNavigation = () => {

    const refLink = useRef<HTMLAnchorElement>()
    const [topOffset, setTopOffset] = useState<number>(0)
    const [currIndex, setCurrIndex] = useState<number>(0)


    return (
        <div className={'pages-navigation'}>
            <Pointer topOffset={topOffset}/>
            {
                nav.map((n, i) => {
                    if (n.inner) return (
                        <NavBlockInner
                            key={n.id}
                            id={n.id}
                            icon={n.icon}
                            link={n.link}
                            title={n.title}
                            inner={n.inner}
                        />
                    )

                    if (n.receiveNotes) {
                        return (
                            <NavLink
                                to={n.link}
                                key={n.id}
                                ref={currIndex === i ? refLink : null}
                                className={({isActive}) => {
                                    if(isActive) setCurrIndex(i)
                                    return ''
                                }}
                            >
                                <RenderWatcher
                                    watcher={n.receiveNotes}
                                    render={(number: number) => (
                                        <NavBlock
                                            link={n.link}
                                            id={n.id}
                                            icon={n.icon}
                                            title={n.title}
                                            node={
                                                <NumberCircle number={number}/>
                                            }
                                        />
                                    )}
                                />
                            </NavLink>
                        )
                    }

                    return (
                       <NavLink
                           to={n.link}
                           key={n.id}
                           ref={currIndex === i ? refLink : null}
                           className={({isActive}) => {
                               if(isActive) setCurrIndex(i)
                               return ''
                           }}
                       >
                           <NavBlock

                               link={n.link}
                               id={n.id}
                               icon={n.icon}
                               title={n.title}
                               node={null}
                           />
                       </NavLink>
                    )
                })
            }
        </div>
    );
};

export default PagesNavigation;