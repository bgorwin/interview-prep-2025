
export default function ChildComponent({sendDataToParent}: {sendDataToParent: (data: string) => void}) {
    return (
        <div>
            <h3>Child Component</h3>
            <input placeholder="Child input" onChange={(e) => sendDataToParent(e.target.value)}></input>
        </div>
    );
}   