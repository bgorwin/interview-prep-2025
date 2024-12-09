
export default function ChildComponent(props: { sendDataToParent: (data: string) => void }) {
    return (
        <div>
            <h3>Child Component</h3>
            <input placeholder="Child input" onChange={(e) => props.sendDataToParent(e.target.value)}></input>
        </div>
    );
}