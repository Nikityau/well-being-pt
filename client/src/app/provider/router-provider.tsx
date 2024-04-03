import React, {FC} from 'react';
import {BrowserRouter} from "react-router-dom";

const RouterProvider: FC<React.PropsWithChildren> = ({children}) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};

export default (node: React.ReactNode) => <RouterProvider  children={node}/>;