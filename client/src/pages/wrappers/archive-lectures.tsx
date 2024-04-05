import React, {useState} from 'react';
import LecturePage from "../lecture-page";
import {TLecture} from "../lecture-page/type/lecture";
import {lecturesData} from "../../shared/data/lectures";

const ArchiveLectures = () => {
    const [state, setState] = useState<Array<TLecture>>(lecturesData)

    return (
        <>
            <LecturePage
                title={'Архив лекций'}
                lectures={state}
            />
        </>
    );
};

export default ArchiveLectures;