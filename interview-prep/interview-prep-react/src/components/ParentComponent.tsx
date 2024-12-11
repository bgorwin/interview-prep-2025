import {useState} from 'react';
import ChildComponent from './ChildComponent';

export function ParentComponent() {
    const [dataFromChild, setDataFromChiild] = useState("");

    const handleChange = (data: string) => {
        setDataFromChiild(data)
    }

    return (
        <div>
            <h3>Parent Component</h3>
            <p>Data from Child: <b>{dataFromChild}</b></p>

            <ChildComponent sendDataToParent={handleChange} />
        </div>
    );
}
