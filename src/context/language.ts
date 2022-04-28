import React, { SetStateAction } from "react";

export const language = {
    russian: {
        about: "О себе",
        aboutContent:
            "Более 20 лет успешной организации и управления бизнес-процессами в логистике. Умею находить эффективные решения.  Ставлю себе новую цель: используя развитые аналитические навыки, освоить профессию в IT и писать качественный код. Смогу эффективно общаться с заказчиками, выполняя работу ответственно и в указанные сроки.",
    },
    english: {
        about: "About Me",
        aboutContent:
            "More than 20 years of successful organization and management of business processes in logistics. I know how to find effective solutions.  I successfully master the profession of Front-End Developer. I'm open to your job offers. I will be able to communicate effectively with customers, doing the work responsibly and on time.",
    },
};

export type TLanguage = typeof language.english;

interface ILanguageContext {
    languageTheme: TLanguage;
    setLanguageTheme: React.Dispatch<SetStateAction<TLanguage>>;
}

export const LanguageContext = React.createContext<ILanguageContext>({
    languageTheme: language.english,
    setLanguageTheme: () => {},
});
