import { useState } from "react";

export default function FilteringQuestionComponent() {
    const fruits = [
        "Apple",
        "Banana",
        "Orange",
        "Strawberry",
        "Pineapple",
        "Mango",
        "Kiwi",
    ];
    const [fruitData, setFruitData] = useState(fruits);
    const [searchTerm, setSearchTerm] = useState("");

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }

    const fruitSearchFiltered = fruitData.filter((fruit) => {
        return fruit.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    })

    return (
        <div>
            <h1>Filtering Question Component</h1>
            <input type="text" placeholder="Search fruits" onChange={handleOnChange} />

            {fruitSearchFiltered.map((fruit) => {
                return (
                    <div key={fruit}>
                        {fruit}
                    </div>
                );
            })}
        </div>
    )
}