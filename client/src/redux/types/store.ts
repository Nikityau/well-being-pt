import {TUserState} from "../slices/user/type";
import {TNotification} from "../slices/notifications/types";

export interface TAppStore {
    user: TUserState,
    notification: Array<TNotification>,
}