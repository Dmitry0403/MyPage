import React from "react";
import { createRoot } from "react-dom/client";
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

const root = createRoot(document.getElementById("root")!);

root.render(<Main />);
