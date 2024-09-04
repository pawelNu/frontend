import { Trash2 } from "react-feather";

export const ListAndKeys = ({items, handleCheck, handleDelete}) => {
    return (
        <main>
            <h1>ListAndKeys</h1>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
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
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
            )}
        </main>
    );
};
