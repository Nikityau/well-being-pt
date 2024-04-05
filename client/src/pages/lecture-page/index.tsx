import React, {FC, useState} from 'react';
import produce from "immer";
import Title from "../../shared/ui/title";
import {TCategory, TLecture} from "./type/lecture";
import Category from "./ui/category";

import './style/index.scss'
import LectureCard from "../../entities/lecture-card";

type Props = {
    title: string,
    lectures: Array<TLecture>
}

const LecturePage: FC<Props> = (
    {
        title,
        lectures
    }) => {

    const [chosenCategories, setChosenCategories] = useState<Array<TCategory>>([]);

    const filteredLectures = lectures?.filter(l => {
        if (chosenCategories.length === 0) return true;

        return chosenCategories.find(c => c.category === l.category.category)
    })

    const onChoose = (c: TCategory) => {
        if (chosenCategories.find(ch => ch.category === c.category)) {
            setChosenCategories(prev => prev.filter(ch => ch.category !== c.category))
            return
        }

        setChosenCategories(prev => produce(prev, draft => {
            draft.push(c)

            return draft
        }))
    }

    return (
        <div className={'lecture-page'}>
            <Title title={`${title} (${filteredLectures.length})`}/>
            <Category
                onChoose={onChoose}
                chosenCategories={chosenCategories}
            />
            <div className={'lecture-page__list'}>
                {
                    filteredLectures.map(l => (
                        <LectureCard
                            key={l.id}
                            preview={l.preview}
                            title={l.title}
                            description={l.description}
                            date={l.date}
                            subscribers={l.subscribers}
                            lecturer={l.lecturer}
                            category={l.category}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default LecturePage;