import React, {FC} from 'react';

type Props = {
    onChange: (mark: number) => void
}

const MarkChoser: FC<Props> = () => {
    return (
        <div className={'mark-choser'}>

        </div>
    );
};

export default MarkChoser;