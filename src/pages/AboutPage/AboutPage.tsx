import React from "react";
import css from "./styles.module.css";
import foto from "../../img/avatar2.jpg";
import { useLanguage } from "../../context";

export const AboutPage: React.FC = () => {
    const { languageTheme: language } = useLanguage();
    return (
        <div className={css.aboutPage}>
            <div className={css.foto}>
                <img src={foto} alt="foto" />
            </div>
            <div className={css.content}>
                <div className={css.title}>{language.about}</div>
                <div className={css.text}>{language.aboutContent}</div>
            </div>
        </div>
    );
};
