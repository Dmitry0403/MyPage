import React from "react";
import { useLanguage } from "../../context";
import certificate from "../../img/Certificate.jpg";
import css from "./styles.module.css";

export const SummaryPage: React.FC = () => {
    const { languageTheme: language } = useLanguage();
    return (
        <div>
            <div className={css.box}>
                <div className={css.title}>{language.objective}</div>
                <div className={css.text}>{language.objectiveContent}</div>
            </div>
            <div className={css.box}>
                <div className={css.title}>{language.education}</div>
                <div className={css.text}>{language.educationContent}</div>
            </div>
            <div className={css.box}>
                <div className={css.title}>{language.experience}</div>
                <div className={css.text}>
                    <p>
                        <div> {language.internship}</div>
                        <div>{language.internshipContent}</div>
                    </p>
                    <a
                        className={css.review}
                        href="https://drive.google.com/file/d/1nFaa5oHaC57BdabkgaqCSlkyoknMxzae/view?usp=sharing"
                        target="_blank"
                    >
                        {language.review}
                    </a>
                    <p>
                        <div>{language.courses}</div>
                        <div>{language.coursesContent}</div>
                    </p>
                    <div className={css.certificate}>
                        <img src={certificate} />
                    </div>
                    <p>
                        <div>{language.current}</div>
                        <div>{language.currentContent}</div>
                    </p>
                    <p>
                        <div>{language.past}</div>
                        <div>{language.pastContent}</div>
                    </p>
                </div>
            </div>
        </div>
    );
};
