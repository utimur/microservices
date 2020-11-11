import {useState} from "react";

export default function ():[boolean, any] {
    const [isDirty, setIsDirty] = useState<boolean>(false)

    const onBlur = (e:any) => {
        setIsDirty(true)
    }

    return [isDirty, onBlur]
};
