import {useState} from 'react';
import ChildComponent from './ChildComponent';
import TwoInputFields from './TwoInputFields';

export function ParentComponent() {
    const [dataFromChild, setDataFromChiild] = useState("");

    const handleChange = (data: string) => {
        setDataFromChiild(data)
    }

    const [inputFieldToParent, setInputFieldToParent] = useState({});

    const handleInputChange = (e) => {
        setInputFieldToParent({
            ...inputFieldToParent,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <div>
                <h3>Parent Component</h3>
                <p>Data from Child: <b>{dataFromChild}</b></p>

                <ChildComponent sendDataToParent={handleChange} />
            </div>
            <div>
                <TwoInputFields inputFieldToParent={handleInputChange} />

                <p>Form Details: {JSON.stringify(inputFieldToParent)}</p>
            </div> 
        </>
    );
}
