import {TLecture} from "../../lecture-page/type/lecture";
import {TUser} from "../../../redux/slices/user/type";

export interface TMaterial {
    id: string,
    description: string,
    link: string
}

export interface TLecturer extends TUser {
    about: string,
}

export interface TLecturePage extends Omit<TLecture, 'lecturer'> {
    lecturer: TLecturer
    questions: Array<string>
    link: string
    time: string
    materials: Array<TMaterial>
    isActive: boolean
    isEnd: boolean
    isSubscribe: boolean,
    reviews: Array<string>,
}