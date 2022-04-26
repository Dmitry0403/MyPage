import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";

const Main: React.FC = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

ReactDOM.render(<Main />, document.getElementById("root"));
