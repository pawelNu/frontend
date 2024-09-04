export const SubComponent = (props) => {
    return (
        <main>
            <h6>{props.title}</h6>
        </main>
    );
};

export const SubComponent2 = ({ title }) => {
    return (
        <main>
            <h6>{title}</h6>
        </main>
    );
};

export const SubComponent3 = ({ title = "Default title"}) => {
    return (
        <main>
            <h6>{title}</h6>
        </main>
    );
};

// SubComponent3.defaultProps = {
//     title: "Default title",
// };
