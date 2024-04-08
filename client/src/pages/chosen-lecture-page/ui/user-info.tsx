import React, {FC} from 'react';
import {TLecturePage} from "../type";
import Button from "../../../shared/ui/button";
import UserQuestion from "./user-question";
import UserReview from "./user-review";

type Props = {
    onAddQuestion: (comment: string) => void
    onSubscribe: (value: boolean) => void
} & Pick<TLecturePage, 'isSubscribe' | 'isEnd' | 'isActive'>

const UserInfo: FC<Props> = (
    {
        onAddQuestion,
        onSubscribe,
        isEnd,
        isSubscribe,
        isActive
    }) => {

    const isRenderPreStartAction = !isActive && !isEnd

    return (
        <div className={'chosen-lecture__user-info'}>
            {
                isRenderPreStartAction && isSubscribe &&
                <UserQuestion onAddQuestion={onAddQuestion}/>
            }
            {
                isRenderPreStartAction &&
                <Button
                    onClick={() => onSubscribe(!isSubscribe)}
                    classNames={[isSubscribe && 'button_subscribed', 'button_hover']}
                >
                    {
                        isSubscribe
                            ? 'Отменить запись'
                            : 'Записаться'
                    }
                </Button>
            }
            {
                isSubscribe && !isActive && isEnd &&
                <UserReview/>
            }
        </div>
    );
};

export default UserInfo;