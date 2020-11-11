import {useState} from "react";

export default function (initValue: string) {
    const [value, setValue] = useState(initValue)

    const onChange = (e:any) => {
        setValue(e.target.value)
    }



    return {value, onChange}
};
