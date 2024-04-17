import produce from "immer";
import React, {useState} from 'react';
import {useSelector} from "react-redux";

import Lecture from "./ui/lecture";
import SideBar from "./ui/side-bar";

import {TLecturePage} from "./type";

import {chosenLecture} from "./data";
import {TAppStore} from "../../redux/types/store";
import {TUserRole} from "../../redux/slices/user/type";

import './style/index.scss'

const ChosenLecturePage = () => {

    const [state, setState] = useState<TLecturePage>(chosenLecture)
    const userRole = useSelector<TAppStore, TUserRole>(state => state.user.role)

    const onSubscribe = (value: boolean) => {
        setState(prev => {
            return produce(prev, draft => {
                draft.isSubscribe = value

                return draft
            })
        })
    }

    const onAddQuestion = (comment: string) => {
        setState(prev => {
            return produce(prev, draft => {
                draft.questions.push(comment);

                return draft
            })
        })
    }

    return (
        <>
            <Lecture
                title={state.title}
                link={state.link}
                category={state.category}
                subscribers={state.subscribers}
                date={state.date}
                isActive={state.isActive}
                isEnd={state.isEnd}
                questions={state.questions}
                time={state.time}
                userRole={userRole}
                isSubscribe={state.isSubscribe}
                onSubscribe={onSubscribe}
                onAddQuestion={onAddQuestion}
                reviews={state.reviews}
            />
            <SideBar
                isActive={state.isActive}
                isEnd={state.isEnd}
                lecturer={state.lecturer}
                description={state.description}
                materials={state.materials}
                userRole={userRole}
            />
        </>
    );
};

export default ChosenLecturePage;