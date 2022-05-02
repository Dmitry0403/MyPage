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
        "ic_redux",
        "ic_reactrouter",
        "ic_react",
        "ic_typescript",
        "ic_javascript",
        "ic_css3",
        "ic_html5",
    ];

    const iconsRight = [
        "ic_bem",
        "ic_npm",
        "ic_antdesign",
        "ic_prettier",
        "ic_eslint",
        "ic_cssmodules",
        "ic_sass",
        "ic_github",
        "ic_git",
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
                    <div className={css.icons}>
                        {iconsRight.map((el) => (
                            <span
                                key={el}
                                className={css[`${el}`] + " " + css.icon}
                            ></span>
                        ))}
                    </div>
                </div>

                <div className={css.text}>{language.englishContent}</div>
            </div>
        </div>
    );
};
