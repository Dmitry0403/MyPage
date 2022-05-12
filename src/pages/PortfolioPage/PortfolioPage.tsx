import React from "react";
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

const dataReactTrelloProject = [
    {
        linkPage: " https://dmitry0403.github.io/Trello-React-release/",
        linkGitHub: "https://github.com/Dmitry0403/REACT-Trello",
        screenshot: trelloReactImg,
    },
];

const dataWeatherProject = [
    {
        linkPage: " https://dmitry0403.github.io/weather-release/",
        linkGitHub: "https://github.com/Dmitry0403/Weather-App",
        screenshot: weatherImg,
    },
];

const dataTodoProject = [
    {
        linkPage: "https://dmitry0403.github.io/todo-redux-release/",
        linkGitHub: "https://github.com/Dmitry0403/todo-redux",
        screenshot: todoImg,
    },
];

const dataCommerceProject = [
    {
        linkPage: " https://dmitry0403.github.io/commerce-release/",
        linkGitHub: "https://github.com/Dmitry0403/commerce-app",
        screenshot: commerceImg,
    },
];

export const PortfolioPage = () => {
    const { languageTheme: language } = useLanguage();

    const cards = (data: IDataProjects[]) => {
        return data.map((item) => (
            <div className={css.card}>
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

    const buttons = [language.all, "HTML&CSS", "JS", "ReactJS"];

    return (
        <div className={css.section}>
            <div className={css.headerSection}>
                <div className={css.title}>{language.portfolio}</div>
                <div className={css.buttons}>
                    {buttons.map((el) => (
                        <div className={css.itemButton}>{el}</div>
                    ))}
                </div>
            </div>
            <div className={css.portfolio}>
                <div className={css.portfolioCards}>
                    <div className={css.portfolioTitle}>HTML&CSS</div>
                    <div className={css.cardsHtml}>
                        {cards(dataHtmlProjects)}
                    </div>
                </div>
                <div className={css.portfolioCards}>
                    <div className={css.portfolioTitle}>Trello JS</div>
                    <div className={css.cardsTrelloJs}>
                        {cards(dataJsProject)}
                    </div>
                </div>
                <div className={css.portfolioProjects}>
                    <div className={css.portfolioCards}>
                        <div className={css.portfolioTitle}>Trello React</div>
                        <div className={css.cardsTrelloReact}>
                            {cards(dataReactTrelloProject)}
                        </div>
                    </div>
                    <div className={css.portfolioCards}>
                        <div className={css.portfolioTitle}>Weather React</div>
                        <div className={css.cardsWeather}>
                            {cards(dataWeatherProject)}
                        </div>
                    </div>
                </div>
                <div className={css.portfolioProjects}>
                    <div className={css.portfolioCards}>
                        <div className={css.portfolioTitle}>ToDo Redux</div>
                        <div className={css.cardsTodo}>
                            {cards(dataTodoProject)}
                        </div>
                    </div>
                    <div className={css.portfolioCards}>
                        <div className={css.portfolioTitle}>Commerce Redux</div>
                        <div className={css.cardsCommerce}>
                            {cards(dataCommerceProject)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
