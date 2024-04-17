import React, {FC} from 'react';
import Title from "../../../shared/ui/title";
import {TLecturePage} from "../type";

type Props = {} & Pick<TLecturePage, 'reviews'>

const AdminStatistic: FC<Props> = (
    {
        reviews
    }) => {
    return (
        <div className={'admin-statistic'}>
            <Title title={'Статистика:'}/>
            <div className={'admin-statistic__stats'}>
                <span>Присутствовали на лекции: </span>
                <span data-mark>4/5</span>
            </div>
            <div className={'admin-statistic__stats'}>
                <span>Оценка: </span>
                <span data-mark>5/5</span>
            </div>
            <div className={'admin-statistic__reviews'}>
                {
                    reviews.map((r, i) => (
                        <div className={'admin-statistic__review'} key={i}>
                            <span>{i + 1}</span>
                            <p>{r}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AdminStatistic;