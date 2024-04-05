import React, {useState} from 'react';

import {nav} from "./data/nav";

import Pointer from "./ui/pointer";

import NavBlock from "../../entities/nav-block";
import NavBlockInner from "../../entities/nav-block-inner";
import RenderWatcher from "../../shared/helpers/render-watcher";
import NumberCircle from "../../entities/number-circle";

import './style/index.scss'

const PagesNavigation = () => {

    const [topOffset, setTopOffset] = useState<number>(0)

    const onSetOffset = (v: number) => {
        //setTopOffset(v)
    }

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
                            <RenderWatcher
                                key={n.id}
                                watcher={n.receiveNotes}
                                render={(number: number) => (
                                    <NavBlock
                                        onCurrent={onSetOffset}
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
                        )
                    }

                    return (
                        <NavBlock
                            onCurrent={onSetOffset}
                            key={n.id}
                            link={n.link}
                            id={n.id}
                            icon={n.icon}
                            title={n.title}
                            node={null}
                        />
                    )
                })
            }
        </div>
    );
};

export default PagesNavigation;