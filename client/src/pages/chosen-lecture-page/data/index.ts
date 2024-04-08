import {TLecturePage} from "../type";
import {nanoid} from "nanoid";

export const chosenLecture: TLecturePage = {
    id: nanoid(),
    lecturer: {
        id: nanoid(),
        about: 'Магистр психологии. Разбираюсь в семейных и личных проблемах, помогаю в развитии талантов, способностей, нахождении успеха.',
        name: 'Jack',
        surname: 'Sparrow',
    },
    category: {
        id: nanoid(),
        category: 'Психология'
    },
    materials: [
        {
            id: nanoid(),
            link: 'https://psychojournal.ru/article/2385-kak-raspoznat-jadovitye-otnoshenija-vosem-priznakov-toksichnosti.html',
            description: 'Как распознать токсичного человека?'
        },
        {
            id: nanoid(),
            link: 'https://psychojournal.ru/article/2385-kak-raspoznat-jadovitye-otnoshenija-vosem-priznakov-toksichnosti.html',
            description: 'Подавление эмоций'
        },
    ],
    preview: '',
    link: 'https://colorscheme.ru/',
    time: '11:00',
    date: '12.11.2025',
    questions: [
        'Что такое эмоциональное выгорание?',
        'Как распознать выгорание?',
        'Признаки и причины выгорания',
        'Последствия выгорания',
        'Лечение выгорания',
    ],
    reviews: [
        'Отзыв',
        'Отзыв',
        'Отзыв',
    ],
    title: 'Эмоциональное выгорание: диагностика и профилактика',
    description: 'Что такое эмоциональное выгорание? На лекции разберём причины возникновения, диагностику и методы лечения эмоционального выгорания',
    subscribers: [
        {
            id: nanoid(),
            name: 'Jack',
            surname: 'Sparrow'
        },
        {
            id: nanoid(),
            name: 'Jack',
            surname: 'Sparrow'
        },
        {
            id: nanoid(),
            name: 'Jack',
            surname: 'Sparrow'
        },
        {
            id: nanoid(),
            name: 'Jack',
            surname: 'Sparrow'
        },
        {
            id: nanoid(),
            name: 'Jack',
            surname: 'Sparrow'
        },
    ],
    isActive: false,
    isEnd: true,
    isSubscribe: true
}