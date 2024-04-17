import React, {FC, useState} from 'react';
import cn from 'classnames'

import Title from "../../shared/ui/title";

import './style/index.scss'
import {set} from "js-cookie";

type Props = {
    onChange: (mark: number) => void
}

const marks = Array.from({length: 5})

const MarkChoser: FC<Props> = (
    {
        onChange
    }) => {

    const [mark, setMark] = useState<number>(-1)

    return (
        <div className={'mark-choser'}>
            <Title title={'Оцените лекцию:'}/>
            <div className={'mark-choser__list'}>
                {
                    marks.map((m, i) => (
                        <div
                            className={cn(
                                'mark-choser__mark',
                                mark === (i + 1) && 'mark-choser__mark_active'
                            )}
                            key={i}
                            onClick={() => setMark(i + 1)}
                        >
                            <span>{i + 1}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MarkChoser;