import React, {FC} from 'react';
import {Provider} from "react-redux";

import {store} from '../../redux/index'

const StoreProvider: FC<React.PropsWithChildren> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default (node: React.ReactNode) => <StoreProvider children={node}/>;