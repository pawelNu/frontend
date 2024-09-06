import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { GoBackToTableOfContent } from "../utils/TableOfContent";

export const GroceriesList = () => {
    return (
        <div>
            <GoBackToTableOfContent />
            <Header />
            <Content />
            <Footer />
        </div>
    );
};
