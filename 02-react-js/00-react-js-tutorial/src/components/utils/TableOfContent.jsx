import { links } from "../../config/links";
import { menuElements } from "../../config/menuConfig";

export const TableOfContent = () => {
    return (
        <>
            <div className="card">
                <h5 className="card-header">Table of content</h5>
                <div className="card-body">
                    <div className="list-group">
                        {menuElements.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="list-group-item list-group-item-action"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export const GoBackToTableOfContent = () => {
    return (
        <>
            <a href={links.tableOfContent} type="button" className="btn btn-outline-info mb-3">
                Go back to Table of Content
            </a>
        </>
    );
};
