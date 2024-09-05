import { ListItems } from "./ListItems";

export const ListAndKeys = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            <h1>ListAndKeys</h1>
            {items.length ? (
                <ListItems items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
            ) : (
                <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
            )}
        </main>
    );
};
