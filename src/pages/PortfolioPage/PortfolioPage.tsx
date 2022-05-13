import React, { useState } from "react";
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

interface IDataProjects {
    linkPage: string;
    linkGitHub: string;
    screenshot: any;
}

const dataHtmlProjects = [
    {
        linkPage: "https://dmitry0403.github.io/AXIT-release/",
        linkGitHub: "https://github.com/Dmitry0403/AXIT-project",
        screenshot: axitImg,
    },
    {
        linkPage: "https://dmitry0403.github.io/promotion-release/",
        linkGitHub: "https://github.com/Dmitry0403/Promotion-project",
        screenshot: promotionImg,
    },
    {
        linkPage: " https://dmitry0403.github.io/caped-release/",
        linkGitHub: "https://github.com/Dmitry0403/Caped-project",
        screenshot: capedImg,
    },
    {
        linkPage: "https://dmitry0403.github.io/article-release/",
        linkGitHub: "https://github.com/Dmitry0403/Grid-project",
        screenshot: articleImg,
    },
    {
        linkPage: "https://dmitry0403.github.io/coffee-release/",
        linkGitHub: "https://github.com/Dmitry0403/Coffee-project",
        screenshot: coffeeImg,
    },
    {
        linkPage: "https://dmitry0403.github.io/flower-release/",
        linkGitHub: "https://github.com/Dmitry0403/Flower-project",
        screenshot: flowerImg,
    },
];

const dataJsProject = [
    {
        linkPage: "https://dmitry0403.github.io/coolSoft/",
        linkGitHub: "https://github.com/Dmitry0403/CoolSoftDevelopment",
        screenshot: trelloJsImg,
    },
];

const dataReactProject = [
    {
        linkPage: " https://dmitry0403.github.io/Trello-React-release/",
        linkGitHub: "https://github.com/Dmitry0403/REACT-Trello",
        screenshot: trelloReactImg,
    },

    {
        linkPage: " https://dmitry0403.github.io/weather-release/",
        linkGitHub: "https://github.com/Dmitry0403/Weather-App",
        screenshot: weatherImg,
    },

    {
        linkPage: "https://dmitry0403.github.io/todo-redux-release/",
        linkGitHub: "https://github.com/Dmitry0403/todo-redux",
        screenshot: todoImg,
    },

    {
        linkPage: " https://dmitry0403.github.io/commerce-release/",
        linkGitHub: "https://github.com/Dmitry0403/commerce-app",
        screenshot: commerceImg,
    },
];

export const PortfolioPage = () => {
    const { languageTheme: language } = useLanguage();

    const [activeButton, setActiveButton] = useState(language.all);

    const buttons = ["All", "HTML&CSS", "JS", "ReactJS"];

    const cards = (data: IDataProjects[]) => {
        return data.map((item) => (
            <div className={css.card} key={item.linkPage}>
                <a href={item.linkPage} title="перейти на страницу">
                    <div className={css.cardImg}>
                        <img src={item.screenshot} alt="screenshot" />
                    </div>
                </a>
                <div className={css.cardLink}>
                    <a href={item.linkGitHub}>GitHub</a>
                </div>
            </div>
        ));
    };

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
            case "ReactJS":
                return dataReactProject;
            default:
                return [
                    ...dataHtmlProjects,
                    ...dataJsProject,
                    ...dataReactProject,
                ];
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
            <div className={css.portfolio}>{cards(getDataProjects())}</div>
        </div>
    );
};
