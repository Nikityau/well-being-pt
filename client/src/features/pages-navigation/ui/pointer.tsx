import React, {FC} from 'react';

type Props = {
    topOffset: number
}

const Pointer: FC<Props> = ({topOffset}) => {
    return (
        <div className={'pointer'}
            style={{
                transform: `translate(0, ${topOffset}px)`
            }}
        >
        </div>
    );
};

export default Pointer;