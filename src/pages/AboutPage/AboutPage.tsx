import React from "react";
import css from "./styles.module.css";
import { useLanguage } from "../../context";
import foto from "../../img/avatar2.jpg";

export const AboutPage: React.FC = () => {
    const { languageTheme: language } = useLanguage();

    const skills = [
        `HTML 5`,
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
        "ic_html5",
        "ic_css3",
        "ic_github",
        "ic_npm",
        "ic_sass",
        "ic_git",
        "ic_prettier",
        "ic_antdesign",
        "ic_bem",
    ];

    return (
        <div className={css.section}>
            <div className={css.leftSideContainer}>
                <div className={css.foto}>
                    <img src={foto} alt="foto" />
                </div>
                <div className={css.name}>{language.name}</div>
                <div className={css.objective}>{language.objectiveContent}</div>
            </div>
            <div className={css.rightSideContainer}>
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
                        {iconsLeft.map((el, index) =>
                            index % 2 === 0 ? (
                                <span
                                    key={el}
                                    className={css[`${el}`] + " " + css.icon}
                                ></span>
                            ) : (
                                <span
                                    key={el}
                                    className={
                                        css[`${el}`] + " " + css.iconPadding30
                                    }
                                ></span>
                            )
                        )}
                    </div>
                </div>
                <div className={css.text}>{language.englishContent}</div>
            </div>
        </div>
    );
};
