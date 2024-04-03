import React, {FC} from 'react';

import './style/index.scss'

type Props ={
    number: number
}

const NumberCircle: FC<Props> = ({number}) => {
    return (
        <div className={'number-circle'}>
            <span>{number}</span>
        </div>
    );
};

export default NumberCircle;