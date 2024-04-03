import {composeWithDevTools} from "@redux-devtools/extension";
import {createStore, Store, combineReducers, applyMiddleware} from "redux";

import {userReducer} from "./slices/user";
import {TAppStore} from "./types/store";
import {notificationsReducer} from "./slices/notifications";


const reducers = combineReducers({
    user: userReducer,
    notification: notificationsReducer,
})

const enhancers = composeWithDevTools(
    applyMiddleware()
)

export const store: Store<TAppStore, any> = createStore(reducers, {},enhancers)

