import React from "react";
import { useLanguage } from "../../context";
import certificate from "../../img/Certificate.jpg";
import css from "./styles.module.css";

export const SummaryPage: React.FC = () => {
    const { languageTheme: language } = useLanguage();
    return (
        <div className={css.section}>
            <div className={css.box}>
                <div className={css.title}>{language.education}</div>
                <div className={css.content}>
                    <div className={css.subTitle}>
                        {language.educationTitle}
                    </div>
                    <div className={css.date}>{language.educationDate}</div>
                </div>
                <div className={css.text}>{language.educationText}</div>
            </div>
            <div className={css.box}>
                <div className={css.title}>{language.experience}</div>
                <div className={css.content}>
                    <div className={css.subTitle}>
                        {language.internshipTitle}
                    </div>
                    <div className={css.date}>{language.internshipDate}</div>
                </div>
                <div className={css.text}>{language.internshipText}</div>
                {/* <a
                    className={css.review}
                    href="https://drive.google.com/file/d/1nFaa5oHaC57BdabkgaqCSlkyoknMxzae/view?usp=sharing"
                    target="_blank"
                >
                    {language.review}
                </a> */}
                <p>
                    <div className={css.content}>
                        <div className={css.subTitle}>
                            {language.coursesTitle}
                        </div>
                        <div className={css.date}>{language.coursesDate}</div>
                    </div>
                    <div className={css.text}>{language.coursesText}</div>
                </p>
                {/* <div className={css.certificate}>
                    <img src={certificate} />
                </div> */}
                <p>
                    <div className={css.content}>
                        <div className={css.subTitle}>
                            {language.currentJobTitle}
                        </div>
                        <div className={css.date}>
                            {language.currentJobDate}
                        </div>
                    </div>
                    <div className={css.text}>{language.currentJobText}</div>
                </p>
                <p>
                    <div className={css.content}>
                        <div className={css.subTitle}>
                            {language.pastJobTitle}
                        </div>
                        <div className={css.date}>{language.pastJobDate}</div>
                    </div>
                    <div className={css.text}>{language.pastJobText}</div>
                </p>
            </div>
        </div>
    );
};
