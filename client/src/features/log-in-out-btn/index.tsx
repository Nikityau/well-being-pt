import React from 'react';
import {useSelector} from "react-redux";
import {TAppStore} from "../../redux/types/store";
import {TUserState} from "../../redux/slices/user/type";

import './style/index.scss'

const LogIOBtn = () => {

    const {role} = useSelector<TAppStore, TUserState>(state => state.user)
    const textByRole = role === 'guest' ? 'Войти' : 'Выйти';

    return (
        <button className={'log-io-btn'}>
            <svg width="23" height="24" viewBox="0 0 23 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.85523 7.80005L7.85523 5.50007C7.85523 3.29093 9.64609 1.50007 11.8552 1.50007L17.625 1.50007C19.8341 1.50007 21.625 3.29093 21.625 5.50007L21.625 18.5C21.625 20.7091 19.8341 22.5 17.625 22.5L11.8552 22.5C9.64609 22.5 7.85522 20.7091 7.85522 18.5L7.85523 16.2"
                    strokeWidth="2" strokeLinecap="round"/>
                <path
                    d="M4.67763 8.8501L2.21642 11.2899C1.82177 11.6811 1.82177 12.3191 2.21642 12.7103L4.67763 15.1501"
                    strokeWidth="2" strokeLinecap="round"/>
                <path d="M2.55925 12.0002L15.2698 12.0002" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p>{textByRole}</p>
        </button>
    );
};

export default LogIOBtn;