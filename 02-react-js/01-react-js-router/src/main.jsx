import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </StrictMode>
);
