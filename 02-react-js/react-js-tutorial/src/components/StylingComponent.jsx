import { GoBackToTableOfContent } from "./utils/TableOfContent";

export const StyledComponent = () => {
    const headerStyle = {
        backgroundColor: "royalblue",
        color: "#fff",
        marginBottom: 25,
    };

    return (
        <>
            <GoBackToTableOfContent />
            <header
                style={{
                    backgroundColor: "blue",
                    color: "#fff",
                }}
            >
                <h1>Styled Component</h1>
            </header>
            <header style={headerStyle}>
                <h1>Styled Component2</h1>
            </header>
        </>
    );
};
