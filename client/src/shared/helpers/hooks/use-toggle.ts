import {useState} from "react";


type Return = [
    boolean,
    {
        on: () => void,
        off: () => void,
        set: (value: boolean) => void
        swtch: () => void
    }
]

export const useToggle = (def: boolean): Return => {
    const [state, setState] = useState(def)

    return [
        state,
        {
            on: () => setState(true),
            off: () => setState(false),
            set: (value) => setState(value),
            swtch: () => setState(prev => !prev)
        }
    ]
}