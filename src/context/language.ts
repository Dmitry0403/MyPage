import React, { SetStateAction } from "react";

export const language = {
    russian: {
        about: "О себе",
        summary: "Резюме",
        contact: "Контакты",
        portfolio: "Портфолио",
        skills: "Навыки",
        aboutContent:
            "Большой опыт в организации и управлении бизнес-процессами. Умею находить эффективные решения. Ответственно выполняю свою работу. На пути к достижению новой жизненной цели 2021 год прошел в активном обучении по специальности Front-end Developer на курсах TeachMeSkills.",
        skillsContent: "Успешно изучены стеки технологий:",
        englishContent: "Уровень английского – Intermediate.",
    },
    english: {
        about: "About",
        summary: "Summary",
        contact: "Contact",
        portfolio: "Portfolio",
        skills: "Skills",
        aboutContent:
            "Extensive experience in organizing and managing business processes. I know how to find effective solutions. I do my job responsibly. On the way to achieving a new life goal, 2021 was spent for active learning as a Front-end Developer at TeachMeSkills courses.",

        skillsContent: "Successfully studied technology stacks:",
        englishContent: "English - Intermediate.",
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
