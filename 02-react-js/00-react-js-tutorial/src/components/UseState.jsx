import { useState } from "react";
import { GoBackToTableOfContent } from "./utils/TableOfContent";

export const UseState = () => {
    const [name, setName] = useState("Dave");
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Dave"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    };

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    };

    const handleClick2 = () => {
        console.log(count);
    };

    return (
        <>
            <GoBackToTableOfContent />
            <div className="card mb-2">
                <h5 className="card-header">UseState</h5>
                <div className="card-body">
                    <h5 className="card-title">Hello {name}!</h5>
                    <div className="d-grid gap-2 col-1">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleNameChange}
                        >
                            Change name
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleClick}>
                            Click it
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleClick2}>
                            Click it
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
