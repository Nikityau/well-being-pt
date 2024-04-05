import {TCategory} from "../type/lecture";
import {nanoid} from "nanoid";

export const categoriesData: Array<TCategory> = [
    {
        id: nanoid(),
        category: 'Психология'
    },
    {
        id: nanoid(),
        category: 'Медитации'
    },
    {
        id: nanoid(),
        category: 'ЛФК'
    },
    {
        id: nanoid(),
        category: 'Диетология'
    },
    {
        id: nanoid(),
        category: 'Сомнология'
    },
]