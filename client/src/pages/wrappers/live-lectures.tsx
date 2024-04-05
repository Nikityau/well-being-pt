import React, {useState} from 'react';
import LecturePage from "../lecture-page";
import {TLecture} from "../lecture-page/type/lecture";
import {lecturesData} from "../../shared/data/lectures";

const LiveLectures = () => {

    const [state, setState] = useState<Array<TLecture>>(lecturesData)

    return (
        <>
            <LecturePage
                title={'Лекции'}
                lectures={state}
            />
        </>
    );
};

export default LiveLectures;