import {useState} from 'react';
import ChildComponent from './ChildComponent';

export function ParentComponent() {
    const [dataFromChild, setDataFromChild] = useState(null);

    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    }

    return (
        <div>
            <h3>Parent Component</h3>
            <p>Data from Child: <b>{dataFromChild}</b></p>

            <ChildComponent sendDataToParent={handleDataFromChild}  />
        </div>
    );
}
