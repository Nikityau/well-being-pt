import produce from "immer";

import {TUserAction, TUserState} from "./type";
import {UserActions} from "./actions";

const initState: TUserState = {
    data: {
        name: 'Jack',
        surname: 'Sparrow'
    },
    role: 'admin'
}

export const userReducer = (state = initState, {type, payload}: TUserAction) => {
    switch (type) {
        case UserActions.USER_LOGIN:
            return produce(state, draft => {
                if(payload === null) return draft

                draft.role = payload.role
                draft.data = {
                    name: payload.name,
                    surname: payload.surname,
                    avatar: payload.avatar
                }

                return draft;
            })
        case UserActions.USER_LOG_OUT:
            return produce(state, draft => {
                draft.data = null;
                draft.role = 'guest';

                return draft
            })
        default:
            return state
    }
}