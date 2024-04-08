import React, {useState} from 'react';
import Title from "../../../shared/ui/title";
import Button from "../../../shared/ui/button";
import InputField from "../../../shared/ui/input-field";

const UserReview = () => {

    const [isSend, setIs] = useState<boolean>(false)

    return (
        <div className={'user-review'}>
            <p>Отзыв:</p>
            {
                isSend &&
                <Title title={'Ваш отзыв отправлен! Спасибо✨'}/>
            }
            {
                !isSend &&
                <div className={'user-review__container'}>
                    <InputField
                        title={'Оставьте отзыв или пожелания'}
                        value={''}
                    />
                    <Button onClick={() => setIs(true)}>
                        Отправить
                    </Button>
                </div>
            }
        </div>
    );
};

export default UserReview;