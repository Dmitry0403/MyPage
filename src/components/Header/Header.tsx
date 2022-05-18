import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LINKS } from "../../common";
import { useLanguage } from "../../context";
import css from "./styles.module.css";

export const Header: React.FC = () => {
    const { languageTheme, setLanguageTheme, language } = useLanguage();

    const links = ["about", "summary", "portfolio", "contact"];

    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const handleMenu = () => setIsActiveMenu((prevState) => !prevState);

    const handleCloseMenu = () => setIsActiveMenu(false);

    const getStyleMenu = () => (isActiveMenu ? css.openMenu : css.closeMenu);

    const getStyleMemuIcon = () =>
        isActiveMenu ? css.closeMenuIcon : css.menuIcon;

    const handleSelectLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setLanguageTheme(value === "eng" ? language.english : language.russian);
    };

    return (
        <div className={css.header}>
            <div className={css.menu}>
                <div className={getStyleMemuIcon()} onClick={handleMenu}>
                    <span></span>
                </div>
                <div className={css.menuBody + " " + getStyleMenu()}>
                    {links.map((el) => (
                        <NavLink
                            key={el}
                            to={LINKS[el as keyof typeof LINKS]}
                            className={({ isActive }) =>
                                isActive ? css.activeMenuLink : css.menuLink
                            }
                            onClick={handleCloseMenu}
                        >
                            {languageTheme[el as keyof typeof languageTheme]}
                        </NavLink>
                    ))}
                </div>
                <select
                    defaultValue={"eng"}
                    className={css.select}
                    onChange={handleSelectLang}
                >
                    <option value={"eng"}>eng</option>
                    <option value={"рус"}>рус</option>
                </select>
            </div>
        </div>
    );
};
