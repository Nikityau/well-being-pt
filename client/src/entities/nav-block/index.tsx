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

    const div = useRef<HTMLAnchorElement>();


    const onActive = () => {
        const topOffset = div.current?.offsetTop;
        onCurrent?.(topOffset);
    }

    return (
        <NavLink
            to={link}
            ref={div}
            className={({isActive}) => {
                if(isActive) onActive();

                return ''
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