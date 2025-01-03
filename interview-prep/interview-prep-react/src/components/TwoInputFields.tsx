
export default function TwoInputFields({inputFieldToParent}: {inputFieldToParent: (e: any) => void}) {
    return (
        <div>
            <h3>Two Input Fields</h3>
            <input 
                placeholder="First input"
                value={inputFieldToParent.firstInput}
                type="text"
                onChange={inputFieldToParent}
                name="firstInput"
            ></input>
            <input 
                placeholder="Second input"
                value={inputFieldToParent.secondInput}
                type="text"                
                onChange={inputFieldToParent}
                name="secondInput"
            ></input>
        </div>
    );
}