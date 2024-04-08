import React, {FC, ReactNode, useRef} from 'react';
import {TNavBlock} from "../../features/pages-navigation/types/nav";

import './style/index.scss'
import {NavLink} from "react-router-dom";

type Props = {
    onCurrent?: (topOffset: number) => void
    onClick?: () => void
    node: ReactNode
} & Pick<TNavBlock, 'icon'>
    & Pick<TNavBlock, 'title'>
    & Pick<TNavBlock, 'link'>
    & Pick<TNavBlock, 'id'>

const NavBlock: FC<Props> = (
    {
        icon,
        title,
        node,
        onClick,
        link,
        id,
        onCurrent
    }) => {


    return (
        <NavLink
            to={link}

            className={({isActive}) => {
                if(link === '#') return ''

                if (isActive)
                    return 'nav-block_current'
            }}
        >
            <div className={'nav-block'} onClick={onClick}>
                <div className={'nav-block__icon'}>
                    {icon}
                </div>
                <div className={'nav-block__title'}>
                    <p>{title}</p>
                </div>
                {
                    node &&
                    node
                }
            </div>
        </NavLink>
    );
};

export default NavBlock;