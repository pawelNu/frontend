import { GoBackToTableOfContent } from "./utils/TableOfContent";

export const ClickEvent = () => {
    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Dave"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    };

    const handleClick = () => {
        console.log("You clicked it!");
    };

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
    };

    const handleClick3 = (e) => {
        console.log(e);
    };

    const handleClick4 = (e) => {
        console.log(e.target.innerText);
    };

    const handleDoubleClick = () => {
        console.log("You clicked it twice!");
    };

    return (
        <>
            <GoBackToTableOfContent />
            <div className="card mb-2">
                <h5 className="card-header">ClickEvent</h5>
                <div className="card-body">
                    <h5 className="card-title">Hello {handleNameChange()}!</h5>
                    <div className="d-grid gap-2 col-1">
                        <button type="button" className="btn btn-primary" onClick={handleClick}>
                            Click It
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => handleClick2("Dave")}
                        >
                            Click It
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={(e) => handleClick3(e)}
                        >
                            Click It
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={(e) => handleClick4(e)}
                        >
                            Click It
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onDoubleClick={handleClick}
                        >
                            Click It Twice
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
