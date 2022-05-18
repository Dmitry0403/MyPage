import React, { useState, useEffect } from "react";
import css from "./styles.module.css";
import axitImg from "../../img/AXIT.png";
import promotionImg from "../../img/promotion.png";
import capedImg from "../../img/caped.png";
import articleImg from "../../img/article.png";
import coffeeImg from "../../img/coffee.png";
import flowerImg from "../../img/flower.png";
import trelloJsImg from "../../img/trelloJS.png";
import trelloReactImg from "../../img/trelloReact.png";
import weatherImg from "../../img/weather.png";
import commerceImg from "../../img/commerce.png";
import todoImg from "../../img/todo.png";
import { useLanguage } from "../../context";

const dataHtmlProjects = [
    {
        linkPage: "https://dmitry0403.github.io/AXIT-release/",
        linkGitHub: "https://github.com/Dmitry0403/AXIT-project",
        screenshot: axitImg,
        title: "Website layout",
        subTitle: "HTML&CSS",
    },
    {
        linkPage: "https://dmitry0403.github.io/promotion-release/",
        linkGitHub: "https://github.com/Dmitry0403/Promotion-project",
        screenshot: promotionImg,
        title: "Website layout",
        subTitle: "HTML&CSS",
    },
    {
        linkPage: " https://dmitry0403.github.io/caped-release/",
        linkGitHub: "https://github.com/Dmitry0403/Caped-project",
        screenshot: capedImg,
        title: "Website layout",
        subTitle: "HTML&CSS",
    },
    {
        linkPage: "https://dmitry0403.github.io/article-release/",
        linkGitHub: "https://github.com/Dmitry0403/Grid-project",
        screenshot: articleImg,
        title: "Website layout",
        subTitle: "HTML&CSS",
    },
    {
        linkPage: "https://dmitry0403.github.io/coffee-release/",
        linkGitHub: "https://github.com/Dmitry0403/Coffee-project",
        screenshot: coffeeImg,
        title: "Website layout",
        subTitle: "HTML&CSS",
    },
    {
        linkPage: "https://dmitry0403.github.io/flower-release/",
        linkGitHub: "https://github.com/Dmitry0403/Flower-project",
        screenshot: flowerImg,
        title: "Website layout",
        subTitle: "HTML&CSS",
    },
];

const dataJsProject = [
    {
        linkPage: "https://dmitry0403.github.io/coolSoft/",
        linkGitHub: "https://github.com/Dmitry0403/CoolSoftDevelopment",
        screenshot: trelloJsImg,
        title: "Project Trello",
        subTitle: "JavaScript",
    },
];

const dataReactProject = [
    {
        linkPage: " https://dmitry0403.github.io/Trello-React-release/",
        linkGitHub: "https://github.com/Dmitry0403/REACT-Trello",
        screenshot: trelloReactImg,
        title: "Project Trello",
        subTitle: "ReactJS",
    },

    {
        linkPage: " https://dmitry0403.github.io/weather-release/",
        linkGitHub: "https://github.com/Dmitry0403/Weather-App",
        screenshot: weatherImg,
        title: "Project Weather",
        subTitle: "ReactJS",
    },

    {
        linkPage: "https://dmitry0403.github.io/todo-redux-release/",
        linkGitHub: "https://github.com/Dmitry0403/todo-redux",
        screenshot: todoImg,
        title: "Project ToDo",
        subTitle: "ReactTS Redux",
    },

    {
        linkPage: " https://dmitry0403.github.io/commerce-release/",
        linkGitHub: "https://github.com/Dmitry0403/commerce-app",
        screenshot: commerceImg,
        title: "e-commerce",
        subTitle: "ReactTS Redux",
    },
];

const dataAllProjects = [
    ...dataHtmlProjects,
    ...dataJsProject,
    ...dataReactProject,
];

export const PortfolioPage: React.FC = () => {
    const { languageTheme: language } = useLanguage();

    const [activeButton, setActiveButton] = useState("All");

    const buttons = ["All", "HTML&CSS", "JS", "React"];

    const getStyleButton = (buttonName: string) => {
        return buttonName === activeButton
            ? css.activeItemButton
            : css.itemButton;
    };

    const handleClickButton = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    const getDataProjects = () => {
        switch (activeButton) {
            case "HTML&CSS":
                return dataHtmlProjects;
            case "JS":
                return dataJsProject;
            case "React":
                return dataReactProject;
            default:
                return dataAllProjects;
        }
    };

    return (
        <div className={css.section}>
            <div className={css.headerSection}>
                <div className={css.title}>{language.portfolio}</div>
                <div className={css.buttons}>
                    {buttons.map((el) => (
                        <div
                            className={getStyleButton(el)}
                            onClick={() => handleClickButton(el)}
                            key={el}
                        >
                            {el}
                        </div>
                    ))}
                </div>
            </div>
            <div className={css.portfolio}>
                {getDataProjects().map((item) => (
                    <div className={css.card} key={item.linkPage}>
                        <a href={item.linkPage}>
                            <div className={css.cardImg}>
                                <div className={css.coverCard}>
                                    <div className={css.coverCardTitle}>
                                        {item.title}
                                    </div>
                                    <div className={css.coverCardSubTitle}>
                                        {item.subTitle}
                                    </div>
                                </div>
                                <img src={item.screenshot} alt="screenshot" />
                            </div>
                        </a>
                        <div className={css.cardLink}>
                            <a href={item.linkGitHub}>GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
