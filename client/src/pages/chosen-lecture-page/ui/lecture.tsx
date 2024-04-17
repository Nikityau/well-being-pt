import React, {FC} from 'react';
import {TLecturePage} from "../type";
import {TUserRole} from "../../../redux/slices/user/type";
import GoBack from "../../../shared/ui/go-back";
import Title from "../../../shared/ui/title";
import AdminStatistic from "./admin-statistic";
import UserInfo from "./user-info";


type Props = {
    userRole: TUserRole
    onSubscribe: (value: boolean) => void
    onAddQuestion: (comment: string) => void
} & Omit<TLecturePage, 'lecturer' | 'materials' | 'description' | 'preview'>


const Lecture: FC<Props> = (
    {
        userRole,
        link,
        date,
        isActive,
        isEnd,
        time,
        questions,
        id,
        title,
        subscribers,
        category,
        onSubscribe,
        isSubscribe,
        onAddQuestion,
        reviews
    }) => {
    return (
        <div className={'chosen-lecture'}>
            <div className={'chosen-lecture__title'}>
                <GoBack/>
                <div className={'chosen-lecture__title-container'}>
                    <Title title={title}/>
                    <p>Категория: <span data-category>{category.category}</span></p>
                    <p>Дата проведения: <span data-date>{date}</span> <span data-time>{time}</span></p>
                </div>
            </div>
            <div className={'chosen-lecture__link'}>
                <p data-link>Ссылка на лекцию: <a href={link} target='_blank'>{link}</a></p>
            </div>
            <div className={'chosen-lecture__questions'}>
                <p>Вопросы на лекцию: </p>
                <ol>
                    {
                        questions?.map((q, i) => (
                            <li key={i}>
                                <p>{q}</p>
                            </li>
                        ))
                    }
                </ol>
            </div>
            {
                userRole === 'admin' &&
                <AdminStatistic
                   reviews={reviews}
                />
            }
            {
                userRole === 'user' &&
                <UserInfo
                    onSubscribe={onSubscribe}
                    onAddQuestion={onAddQuestion}
                    isSubscribe={isSubscribe}
                    isEnd={isEnd}
                    isActive={isActive}
                />
            }
        </div>
    );
};

export default Lecture;