import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import { LanguageProvider } from "./context";

const Main: React.FC = () => {
    return (
        <BrowserRouter>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </BrowserRouter>
    );
};

ReactDOM.render(<Main />, document.getElementById("root"));
