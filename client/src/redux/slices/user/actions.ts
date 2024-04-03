import {TUserAction, TUserLogin} from "./type";

export enum UserActions {
    USER_LOGIN = "user/login",
    USER_LOG_OUT = "user/log-out"
}

export const userLogin = (data: TUserLogin): TUserAction => {
    return {
        type: UserActions.USER_LOGIN,
        payload: data
    }
}

export const userLogOut = (): TUserAction => {
    return {
        type: UserActions.USER_LOG_OUT
    }
}