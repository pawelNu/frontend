import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { StyledComponent } from "./StylingComponent";

function App() {
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
            <StyledComponent />
        </div>
    );
}

export default App;
