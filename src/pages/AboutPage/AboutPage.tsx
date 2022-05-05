import React from "react";
import css from "./styles.module.css";
import foto from "../../img/avatar2.jpg";
import { useLanguage } from "../../context";

export const AboutPage: React.FC = () => {
    const { languageTheme: language } = useLanguage();

    const skills = [
        "HTML 5",
        "CSS / SASS",
        "JavaScript",
        "TypeScript",
        "GIT",
        "ReactJS",
        "Redux Toolkit",
        "Webpack",
    ];

    const iconsLeft = [
        "ic_webpack",
        "ic_typescript",
        "ic_reactrouter",
        "ic_react",
        "ic_redux",
        "ic_javascript",
        "ic_css3",
        "ic_html5",
        "ic_github",
        "ic_npm",
        "ic_prettier",
        "ic_sass",
    ];

    return (
        <div className={css.aboutPage}>
            <div className={css.sideContainer}>
                <div className={css.foto}>
                    <img src={foto} alt="foto" />
                </div>
                <div className={css.icons}>
                    {iconsLeft.map((el) => (
                        <span
                            key={el}
                            className={css[`${el}`] + " " + css.icon}
                        ></span>
                    ))}
                </div>
            </div>
            <div className={css.content}>
                <div className={css.title}>{language.about}</div>
                <div className={css.text}>{language.aboutContent}</div>
                <div className={css.title}>{language.skills}</div>
                <div className={css.text}>{language.skillsContent}</div>
                <div className={css.listContainer}>
                    <ul className={css.list}>
                        {skills.map((el) => (
                            <li key={el}>{el}</li>
                        ))}
                    </ul>
                </div>
                <div className={css.text}>{language.englishContent}</div>
            </div>
        </div>
    );
};
