import React, {FC} from 'react';
import cn from 'classnames'

import {TNavBlock} from "../../features/pages-navigation/types/nav";
import NavBlock from "../nav-block";
import {useToggle} from "../../shared/helpers/hooks/use-toggle";

import './style/index.scss'

type Props = {} & Omit<TNavBlock, 'receiveNotes'>

const NavBlockInner: FC<Props> = (
    {
        inner,
        title,
        id,
        link,
        icon
    }) => {

    const [isOpen, {swtch}] = useToggle(false)

    return (
        <div className={cn(
            'nav-block-inner',
            {
                'nav-block-inner_open': isOpen
            }
        )}>
            <NavBlock
                onClick={swtch}
                link={link}
                id={id}
                icon={icon}
                title={title}
                node={(
                    <div className={'nav-block-inner__arrow'}>
                        <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 1L9 7L15 1" stroke="#989EA8" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </div>
                )}
            />
            <div className={'nav-block__links'}>
                {
                    inner.map(i => (
                        <NavBlock
                            key={i.id}
                            link={i.link}
                            id={i.id}
                            icon={<div className={'nav-block__plug'} />}
                            title={i.title}
                            node={null}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default NavBlockInner;