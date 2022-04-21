import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LINKS } from "../../common";
import { AboutPage } from "../../pages/AboutPage";
import { ContactPage } from "../../pages/ContactPage";
import { MasterPage } from "../../pages/MasterPage";
import { PortfolioPage } from "../../pages/PortfolioPage";
import { SummaryPage } from "../../pages/SummaryPage";

export const App: React.FC = () => {
    return (
        <Routes>
            <Route path={LINKS.about} element={<MasterPage />}>
                <Route index element={<AboutPage />} />
                <Route path={LINKS.summary} element={<SummaryPage />} />
                <Route path={LINKS.portfolio} element={<PortfolioPage />} />
                <Route path={LINKS.contact} element={<ContactPage />} />
                <Route path="*" element={<Navigate to={LINKS.about} />} />
            </Route>
        </Routes>
    );
};
