import React, { useState } from "react";
import { useLanguage } from "../../context";
import certificate from "../../img/certificate.jpg";
import review from "../../img/review.jpg";
import { Image } from "../../components/Image";
import css from "./styles.module.css";

export const SummaryPage: React.FC = () => {
    const { languageTheme: language } = useLanguage();

    const [isActiveImage, setIsActiveImage] = useState(false);

    const [image, setImage] = useState("");

    const handleActiveImage = (image: any) => {
        setIsActiveImage((prevState) => !prevState);
        setImage(image);
    };

    return (
        <div className={css.section}>
            {!isActiveImage && (
                <>
                    <div className={css.box}>
                        <div className={css.title}>{language.education}</div>
                        <div className={css.content}>
                            <div className={css.subTitle}>
                                {language.educationTitle}
                            </div>
                            <div className={css.date}>
                                {language.educationDate}
                            </div>
                        </div>
                        <div className={css.text}>{language.educationText}</div>
                    </div>
                    <div className={css.box}>
                        <div className={css.title}>{language.experience}</div>
                        <div className={css.content}>
                            <div className={css.subTitle}>
                                {language.internshipTitle}
                            </div>
                            <div className={css.date}>
                                {language.internshipDate}
                            </div>
                        </div>
                        <div className={css.text}>
                            {language.internshipText}
                        </div>
                        <div
                            className={css.image}
                            onClick={() => handleActiveImage(review)}
                        >
                            {language.seeReview}
                        </div>
                        <p>
                            <div className={css.content}>
                                <div className={css.subTitle}>
                                    {language.coursesTitle}
                                </div>
                                <div className={css.date}>
                                    {language.coursesDate}
                                </div>
                            </div>
                            <div className={css.text}>
                                {language.coursesText}
                            </div>
                            <div
                                className={css.image}
                                onClick={() => handleActiveImage(certificate)}
                            >
                                {language.seeCerificate}
                            </div>
                        </p>
                        <p>
                            <div className={css.content}>
                                <div className={css.subTitle}>
                                    {language.currentJobTitle}
                                </div>
                                <div className={css.date}>
                                    {language.currentJobDate}
                                </div>
                            </div>
                            <div className={css.text}>
                                {language.currentJobText}
                            </div>
                        </p>
                        <p>
                            <div className={css.content}>
                                <div className={css.subTitle}>
                                    {language.pastJobTitle}
                                </div>
                                <div className={css.date}>
                                    {language.pastJobDate}
                                </div>
                            </div>
                            <div className={css.text}>
                                {language.pastJobText}
                            </div>
                        </p>
                    </div>
                </>
            )}
            {isActiveImage && (
                <Image handleActiveImage={handleActiveImage} image={image} />
            )}
        </div>
    );
};
