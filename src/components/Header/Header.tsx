import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { transform } from "typescript";
import { LINKS } from "../../common";
import css from "./styles.module.css";

export const Header: React.FC = () => {
    const links = ["about", "summary", "contact", "portfolio"];
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const handleMenu = () => {
        setIsActiveMenu((prevState) => !prevState);
    };

    const getStyleMenu = () => {
        return isActiveMenu ? css.openMenu : css.closeMenu;
    };

    const getStyleMemuIcon = () => {
        return isActiveMenu ? css.closeMenuIcon : css.menuIcon;
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
                            onClick={handleMenu}
                        >
                            {el}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};
