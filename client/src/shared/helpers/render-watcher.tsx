import React, {FC} from 'react';
import {useSelector} from "react-redux";

type Props = {
    watcher: (data?:any) => any,
    render: (data?:any) => React.ReactNode
}

const RenderWatcher:FC<Props> = (
    {
        watcher,
        render,
    }) => {

    const data = useSelector(watcher);

    return (
        <>
            {
                render(data)
            }
        </>
    );
};

export default RenderWatcher;