import { Trash2 } from "react-feather";

export const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item" key={item.id}>
            <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
            <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
            >
                {item.item}
            </label>
            <Trash2
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
                className="ms-1"
                aria-label={`Delete ${item.id}`}
            />
        </li>
    );
};
