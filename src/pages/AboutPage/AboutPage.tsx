import React from "react";
import css from "./styles.module.css";
import foto from "../../img/avatar2.jpg";

export const AboutPage: React.FC = () => {
    return (
        <div className={css.aboutPage}>
            <div className={css.foto}>
                <img src={foto} alt="foto" />
            </div>
            <div className={css.content}>
                <div className={css.title}>О себе</div>
                <div className={css.text}>
                    Более 20 лет успешной организации и управления
                    бизнес-процессами в логистике. Умею находить эффективные
                    решения. Ставлю себе новую цель: используя развитые
                    аналитические навыки, освоить профессию в IT и писать
                    качественный код. Смогу эффективно общаться с заказчиками,
                    выполняя работу ответственно и в указанные сроки.
                </div>
            </div>
        </div>
    );
};
