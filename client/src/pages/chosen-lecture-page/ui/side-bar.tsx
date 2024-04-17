import React, {FC} from 'react';
import {TLecturePage} from "../type";
import {TUserRole} from "../../../redux/slices/user/type";
import Button from "../../../shared/ui/button";

type Props = {
    isActive: boolean,
    isEnd: boolean,
    userRole: TUserRole
} & Pick<TLecturePage, 'lecturer' | 'description' | 'materials'>

const SideBar: FC<Props> = (
    {
        isActive,
        isEnd,
        lecturer,
        materials,
        description,
        userRole
    }) => {

    const adminRender = userRole === 'admin' && !isActive

    return (
        <div className={'chosen-lecture-side-bar'}>
            <div className={'clsb__description'}>
                <h4>О лекции</h4>
                <p>{description}</p>
            </div>
            <div className={'clsb__about-lecturer'}>
                <h4>О лекторе</h4>
                <div className={'clsb__lecturer-info'}>
                    <div>
                        <span>{lecturer.name} {lecturer.surname}</span>
                        <p>{lecturer.about}</p>
                    </div>
                    <div
                        className={'clsb__avatar'}
                        style={{
                            backgroundImage: `url(${lecturer.avatar})`
                        }}
                    >

                    </div>
                </div>
            </div>
            <div className={'clsb__materials'}>
                <h4>Материалы лектора:</h4>
                <div className={'clsb__materials-list'}>
                    {
                        materials.map((m) => (
                            <div className={'clsb__material'} key={m.id}>
                                <p>{m.description}</p>
                                <a href={m.link}>{m.link}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                adminRender &&
                <div className={'admin-bttns'}>
                    <Button
                        classNames={'admin-bttns__upd'}
                    >
                        Редактировать
                    </Button>
                    <Button
                        classNames={'admin-bttns__delete'}
                    >
                        Удалить
                    </Button>
                </div>
            }
        </div>
    );
};

export default SideBar;