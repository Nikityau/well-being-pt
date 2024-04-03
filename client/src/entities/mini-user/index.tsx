import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {TAppStore} from "../../redux/types/store";
import {TUserState} from "../../redux/slices/user/type";

import './style/index.scss'

const MiniUser: FC = () => {
    const {data} = useSelector<TAppStore, TUserState>(state => state.user);
    const isAvatarUpload: boolean = data?.avatar && true;

    return (
        <div className={'mini-user'}>
            <div className={'mini-user__avatar'}
                 style={{
                     backgroundImage: isAvatarUpload && `url(${data.avatar})`
                 }}
            >
                {
                    !isAvatarUpload &&
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="4.28571" cy="4.28571" rx="4.28571" ry="4.28571"
                                 transform="matrix(-1 0 0 1 13.5356 1)" stroke="#191919" strokeWidth="2"/>
                        <path
                            d="M1.75 15.93C1.75 15.0082 2.32949 14.1859 3.1976 13.8759V13.8759C7.11147 12.4781 11.3885 12.4781 15.3024 13.8759V13.8759C16.1705 14.1859 16.75 15.0082 16.75 15.93V17.444C16.75 18.6611 15.672 19.596 14.4672 19.4239L13.0684 19.2241C10.5357 18.8622 7.96435 18.8622 5.43162 19.2241L4.03284 19.4239C2.82798 19.596 1.75 18.6611 1.75 17.444V15.93Z"
                            stroke="#191919" strokeWidth="2"/>
                    </svg>

                }

            </div>
            <div className={'mini-user__data'}>
                {
                    data &&
                    <>
                        <p>{data.name}</p>
                        <p>{data.surname}</p>
                    </>
                }
                {
                    !data &&
                    <p>Гость</p>
                }
            </div>
        </div>
    );
};

export default MiniUser;