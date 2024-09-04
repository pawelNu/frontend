import { ListAndKeys } from "./ListAndKeys";
import { SubComponent } from "./SubComponent";
import { SubComponent2 } from "./SubComponent";
import { SubComponent3 } from "./SubComponent";
import { itemList } from "./list";
import { useState } from "react";

export const PropsAndPropDrilling = () => {
    const [items, setItems] = useState(itemList);

    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
        localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    };
    return (
        <div>
            <h1>PropsAndPropDrilling</h1>
            <SubComponent title="SubComponentTitle" />
            <SubComponent2 title="SubComponentTitle2" />
            <SubComponent3 />
            <ListAndKeys items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
        </div>
    );
};
