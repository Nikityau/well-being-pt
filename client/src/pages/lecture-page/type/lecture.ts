import {TUser} from "../../../redux/slices/user/type";

export interface TCategory {
    id: string,
    category: string
}

export interface TLecture {
    id?: string,
    preview: string,
    title: string,
    description: string,
    date: string,
    subscribers: Array<TUser>,
    lecturer: TUser,
    category: TCategory
}



