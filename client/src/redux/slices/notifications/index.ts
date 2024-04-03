import {TNotification} from "./types";
import {notificationData} from "./data";

const initState: Array<TNotification> = notificationData;

export const notificationsReducer = (state: Array<TNotification> = initState, {type}) => {
    switch (type) {
        default:
            return state
    }
}