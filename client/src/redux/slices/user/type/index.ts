import {TAction} from "../../../types/action";
import {UserActions} from "../actions";

export interface TUser {
    name: string,
    surname: string,
    avatar?: string
}

export type TUserRole = 'guest' | 'user' | 'admin'

export interface TUserState {
    data: TUser | null,
    role: TUserRole
}

export interface TUserLogin extends TUser{
    role: TUserRole;
}

export interface TUserAction extends TAction<UserActions, null | TUserLogin> {}