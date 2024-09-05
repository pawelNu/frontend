import { PlusSquare } from "react-feather";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();

    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id="addItem"
                type="text"
                placeholder="Add Item"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                className="customBtn"
                type="submit"
                aria-label="Add Item"
                onClick={() => inputRef.current.focus()}
            >
                <PlusSquare size="100%" color="black" />
            </button>
        </form>
    );
};

export default AddItem;
