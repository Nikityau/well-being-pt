import React, {FC} from 'react';

import './index.scss'

type Props = {
    title: string,
}

const Title: FC<Props> = ({title}) => {
    return (
        <div className={'title-ui'}>
            <span>{title}</span>
        </div>
    );
};

export default Title;