import { StyledComponent } from "./components/StylingComponent";
import { ClickEvent } from "./components/ClickEvent";
import { GroceriesList } from "./components/GroceriesList";
import { UseState } from "./components/UseState";

function App() {
    return (
        <div className="container">
            <GroceriesList />
            <StyledComponent />
            <ClickEvent />
            <UseState />
        </div>
    );
}

export default App;
