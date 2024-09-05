import { StyledComponent } from "./components/StylingComponent";
import { ClickEvent } from "./components/ClickEvent";
import { UseState } from "./components/UseState";
import { ListAndKeys } from "./components/ListAndKeys";
import { PropsAndPropDrilling } from "./components/propsAndPropDrilling/PropsAndPropDrilling";
import { GroceriesList } from "./components/groceriesList/GroceriesList";
import { ControlledComponentInputs } from "./components/controlledComponentInputs/ControlledComponetInputs";

function App() {
    return (
        <div className="container">
            <GroceriesList />
            <StyledComponent />
            <ClickEvent />
            <UseState />
            <ListAndKeys />
            <PropsAndPropDrilling />
            <ControlledComponentInputs />
        </div>
    );
}

export default App;
