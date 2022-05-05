import React, { SetStateAction } from "react";

export const language = {
    russian: {
        about: "О себе",
        summary: "Резюме",
        contact: "Контакты",
        portfolio: "Портфолио",
        skills: "Навыки",
        objective: "Позиция",
        education: "Образование",
        experience: "Опыт работы",
        internship: "31.01 - 24.03.2022: стажировка SolbegSoft",
        courses:
            "22.04 – 22.12.2021: courses «TeachMeSkills» Front-end Developer",
        current: "2005 – по настоящее время: ООО «Аэростар»",
        past: "1999 – 2005: СП «Белкарго»",
        review: "отзыв SolbegSoft",
        pastContent:
            "специалист по организации международных перевозок. Приобрел навыки ведения документооборота, коммуникации, стрессоустойчивости и умения находить решение в конфликтных ситуациях.",
        currentContent:
            "начальник отдела автомобильных перевозок.Развивая логистику сборных грузов, в условиях постоянно меняющихся исходных данных, использую навыки планирования, поиска и расчета оптимальных решений. Работаю в команде, управляя водительским составом. Общаясь с клиентами, развиваю опыт коммуникации и разрешения конфликтных ситуаций. Ответственно подхожу к выполнению условий и сроков контрактов.",
        coursesContent:
            "Успешно изучены основы HTML, CSS, JavaScript, ReactJS, Redux, TypeScript и Webpack. Знания были реализованы на многочисленных проектах. Обучение завершилось проектом интернет-магазина SPA на React в связке с  Redux Thunk для контроля за состоянием приложения и асинхронных запросов.",
        internshipContent:
            "В ходе стажировки было разработано небольшое приложение (SPA) (браузерное приложение для учета результатов и хода игры в бильярд)",
        objectiveContent: "Front-end разработчик",
        educationContent:
            "1993-1998: Белорусский национальный технический университет, специальность – инженер-экономист",
        aboutContent:
            "Большой опыт в организации и управлении бизнес-процессами. Умею находить эффективные решения. Ответственно выполняю свою работу. На пути к достижению новой цели 2021 год прошел в активном обучении по специальности Front-end Developer на курсах TeachMeSkills.",
        skillsContent: "Успешно изучены стеки технологий:",
        englishContent: "Уровень английского – Intermediate.",
    },
    english: {
        about: "About",
        summary: "Summary",
        contact: "Contact",
        portfolio: "Portfolio",
        skills: "Skills",
        objective: "Objective",
        education: "Education",
        experience: "Work experience",
        internship: "31.01 - 24.03.2022: SolbegSoft internship",
        courses:
            "22.04 – 22.12.2021: курсы «TeachMeSkills» Front-end Developer",
        current: "2005 – until now: Aerostar LLC",
        past: "1999 – 2005: JV Belkargo",
        review: "review SolbegSoft",
        pastContent:
            "a specialist in the organization of international transportation. I acquired the skills of document management, communication, stress tolerance and the ability to find solutions in conflict situations.",
        currentContent:
            "Head of the transport department.I use the skills of planning, searching and calculating optimal solutions for logistics development in conditions of constantly changing initial data. I deal with clients, gain experience in communication and conflict resolution. I take a responsible approach to fulfilling the terms and conditions of contracts.",
        coursesContent:
            "The basics of HTML, CSS and JavaScript, ReactJS, Redux, TypeScript, Webpack have been successfully studied. The knowledge has been implemented on numerous projects. The training ended with the project of the SPA online store on React in conjunction with Redux Thunk to control the state of the application and asynchronous requests.",
        internshipContent:
            "During the internship, a small application (SPA) was developed (a browser-based application for taking into account the results and progress of the game of billiards)",
        objectiveContent: "Front-end developer",
        educationContent:
            "1993-1998: Belarusian National Technical University, specialty – engineer-economist",
        aboutContent:
            "Extensive experience in organizing and managing business processes. I know how to find effective solutions. I do my job responsibly. On the way to achieving a new goal, 2021 was spent for active learning as a Front-end Developer at TeachMeSkills courses.",

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
