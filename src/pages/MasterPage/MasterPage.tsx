import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

import css from "./styles.module.css";

export const MasterPage: React.FC = () => {
    return (
        <div className={css.wrapper}>
            <Header />
            <div className={css.containerChildren}>
                <div className={css.subContainerChildren}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
