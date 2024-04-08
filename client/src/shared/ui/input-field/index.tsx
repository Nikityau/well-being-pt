import React, {FC} from 'react';
import cn from 'classnames'

import './index.scss'

type Props = {
    value: string,
    onChange?: (value: string) => void
    type?: 'password' | 'text',
    placeholder?: string,
    title?: string,
    classNames?: string[] | string
}

const InputField: FC<Props> = (
    {
        onChange,
        placeholder,
        title,
        type = 'text',
        value,
        classNames
    }) => {
    return (
        <div className={cn(
            'input-field',
            classNames
        )}>
            {
                title &&
                <p data-input-title>{title}</p>
            }
            <input
                value={value}
                placeholder={placeholder}
                type={type}
                onChange={({target: {value}}) => onChange?.(value)}
            />
        </div>
    );
};

export default InputField;