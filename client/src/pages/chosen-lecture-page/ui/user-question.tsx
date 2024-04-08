import React, {FC, useState} from 'react';
import InputField from "../../../shared/ui/input-field";
import Button from "../../../shared/ui/button";

type Props = {
    onAddQuestion: (comment: string) => void
}

const UserQuestion: FC<Props> = ({onAddQuestion}) => {

    const [state, setState] = useState<string>('')

    const onClick = () => {
        onAddQuestion(state)
        setState('')
    }

    return (
        <div className={'chosen-lecture__user-comment'}>
            <InputField
                value={state}
                placeholder={'Напишите ваш вопрос'}
                onChange={setState}
                classNames={'input_size_l'}
            />
            <Button onClick={onClick} classNames={'button_hover'}>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.7232 1.75895C20.6613 1.44624 21.5538 2.33873 21.2411 3.27684L15.5178 20.4466C15.1894 21.4318 13.8496 21.563 13.3362 20.6603L9.75777 14.3671C9.49086 13.8977 9.1022 13.5091 8.6328 13.2422L2.33973 9.66376C1.437 9.15045 1.56824 7.81059 2.55342 7.48219L19.7232 1.75895Z"
                        stroke="#F6F8FD" strokeWidth="2"/>
                </svg>
            </Button>
        </div>
    );
};

export default UserQuestion;