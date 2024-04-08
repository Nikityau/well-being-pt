import React, {FC, useEffect} from 'react';

import {TLecture} from "../../pages/lecture-page/type/lecture";

import './style/index.scss'
import Title from "../../shared/ui/title";

type Props = {

} & TLecture

const LectureCard: FC<Props> = (
    {
        lecturer,
        title,
        id,
        subscribers,
        date,
        preview,
        category,
        description
    }) => {

    useEffect(() => {
        console.log(description.length)
    }, [])

    return (
        <div className={'lecture-card'}>
            <div className={'lecture-card__preview'}
                style={{
                    backgroundImage: preview && `url(${preview})`
                }}
            >
            </div>
            <div className={'lecture-card__info'}>
                <Title title={title}/>
                <p className={'lecture-card__lecturer'}>{`${lecturer.name} ${lecturer.surname}`}</p>
                <p className={'lecture-card__description'}>{description.substring(0, 105) + "..."}</p>
                <p className={'lecture-card__date'}>
                    Дата проведения: <span>{date}</span>
                </p>
            </div>
            <div className={'lecture-card__pointer'}>
                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L10 10L1 19" stroke="#F6F8FD" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
};

export default LectureCard;