import React, {FC, ReactNode} from 'react';
import {TNavBlock} from "../../features/pages-navigation/types/nav";

import './style/index.scss'

type Props = {
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
        onClick
    }) => {

    return (
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
    );
};

export default NavBlock;