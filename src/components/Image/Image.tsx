import React from "react";
import css from "./styles.module.css";

interface IProps {
    image: any;
    handleActiveImage: (image: any) => void;
}

export const Image: React.FC<IProps> = ({ handleActiveImage, image }) => {
    return (
        <div className={css.section}>
            <div className={css.imageContainer}>
                <img src={image} />
            </div>
            <div className={css.icon}>
                <div
                    className={css.closeMenuIcon}
                    onClick={() => handleActiveImage("")}
                ></div>
            </div>
        </div>
    );
};
