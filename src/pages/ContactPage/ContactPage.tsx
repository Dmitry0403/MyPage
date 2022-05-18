import React from "react";
import { useLanguage } from "../../context";
import css from "./styles.module.css";

export const ContactPage: React.FC = () => {
    const { languageTheme: language } = useLanguage();

    return (
        <div className={css.section}>
            <div className={css.headerSection}>
                <div className={css.title}>{language.contact}</div>
            </div>
            <div className={css.name}>{language.name}</div>
            <div className={css.objective}>{language.objectiveContent}</div>
            <div className={css.contacts}>
                <div className={css.box}>
                    <div className={css.ic_viber + " " + css.icon}></div>
                    <div className={css.ic_telegram + " " + css.icon}></div>
                    <div className={css.ic_whatsapp + " " + css.icon}></div>
                    <div>
                        <div className={css.boxTitle}>Phone</div>
                        <div className={css.boxContent}>+375 29 6241450</div>
                    </div>
                </div>
                <div className={css.box}>
                    <div className={css.ic_gmail + " " + css.icon}></div>
                    <div>
                        <div className={css.boxTitle}>Email</div>
                        <div className={css.boxContent}>
                            <a href="mailto:kosenkodm44@gmail.com">
                                kosenkodm44@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className={css.box}>
                    <div className={css.ic_linkedin + " " + css.icon}></div>
                    <div>
                        <div className={css.boxTitle}>LinkedIn</div>
                        <div className={css.boxContent}>
                            <a href="https://clck.ru/adioP" target="blanck">
                                clck.ru/adioP
                            </a>
                        </div>
                    </div>
                </div>
                <div className={css.box}>
                    <div className={css.ic_github + " " + css.icon}></div>
                    <div>
                        <div className={css.boxTitle}> GitHub</div>
                        <div className={css.boxContent}>
                            <a
                                href="https://github.com/Dmitry0403"
                                target="blanck"
                            >
                                github.com/Dmitry0403
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
