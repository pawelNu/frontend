import { StyledComponent } from "./components/StylingComponent";
import { ClickEvent } from "./components/ClickEvent";
import { UseState } from "./components/UseState";
import { ListAndKeys } from "./components/ListAndKeys";
import { PropsAndPropDrilling } from "./components/08-propsAndPropDrilling/PropsAndPropDrilling";
import { GroceriesList } from "./components/groceriesList/GroceriesList";
import { ControlledComponentInputs } from "./components/09-controlledComponentInputs/ControlledComponetInputs";
import { links } from "./config/links";
import { Routes, Route } from "react-router-dom";
import { TableOfContent } from "./components/utils/TableOfContent";
import SquareApp from "./components/10-beginnerChallenge/SquareApp";
import { AppUseEffect } from "./components/11-useEffectHook/AppUseEffect";
import { AppFetchApi } from "./components/13-fetch-api/AppFetchApi";
import { AppFetchDataChallenge } from "./components/15-fetch-data-challenge/AppFetchDataChallenge";

function App() {
    return (
        <div className="container mt-5">
            <Routes>
                <Route path={links.tableOfContent} element={<TableOfContent />} />
                <Route path={links.groceriesList} element={<GroceriesList />} />
                <Route path={links.styledComponent} element={<StyledComponent />} />
                <Route path={links.clickEvent} element={<ClickEvent />} />
                <Route path={links.useState} element={<UseState />} />
                <Route path={links.listAndKeys} element={<ListAndKeys />} />
                <Route path={links.propsAndPropDrilling} element={<PropsAndPropDrilling />} />
                <Route
                    path={links.controlledComponentInputs}
                    element={<ControlledComponentInputs />}
                />
                <Route path={links.squareApp} element={<SquareApp />} />
                <Route path={links.appUseEffect} element={<AppUseEffect />} />
                <Route path={links.fetchApi} element={<AppFetchApi />} />
                <Route path={links.fetchDataChallenge} element={<AppFetchDataChallenge />} />
            </Routes>
        </div>
    );
}

export default App;
