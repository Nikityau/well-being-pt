import React, {FC} from 'react';
import cn from 'classnames'

import './index.scss'

type Props = {
    onClick?: () => void,
    classNames?: string[] | string
} & React.PropsWithChildren

const Button: FC<Props> = (
    {
        classNames,
        children,
        onClick
    }) => {
    return (
        <button className={cn(
            'button-ui',
            classNames
        )} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;