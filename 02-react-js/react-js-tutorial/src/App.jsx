import { StyledComponent } from "./components/StylingComponent";
import { ClickEvent } from "./components/ClickEvent";
import { GroceriesList } from "./components/GroceriesList";
import { UseState } from "./components/UseState";
import { ListAndKeys } from "./components/ListAndKeys";

function App() {
    return (
        <div className="container">
            <GroceriesList />
            <StyledComponent />
            <ClickEvent />
            <UseState />
            <ListAndKeys />
        </div>
    );
}

export default App;
