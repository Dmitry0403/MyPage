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
        experience: "Опыт",
        all: "Все",
        name: "Дмитрий Косенко",
        internshipTitle: "Стажировка SolbegSoft",
        internshipDate: "январь - апрель 2022",
        internshipText:
            "В ходе стажировки было разработано небольшое приложение (SPA) (браузерное приложение для учета результатов и хода игры в бильярд)",
        coursesTitle: "Курсы «TeachMeSkills» Front-end Developer",
        coursesDate: "апрель - декабрь 2021",
        coursesText:
            "Успешно изучены основы HTML, CSS, JavaScript, ReactJS, Redux, TypeScript и Webpack. Знания были реализованы на многочисленных проектах. Обучение завершилось проектом интернет-магазина SPA на React в связке с  Redux Thunk для контроля за состоянием приложения и асинхронных запросов.",

        currentJobTitle: "ООО «Аэростар»",
        currentJobDate: "ноябрь 2005 - по настоящее время",
        currentJobText:
            "Начальник отдела автомобильных перевозок.Развивая логистику сборных грузов, в условиях постоянно меняющихся исходных данных, использую навыки планирования, поиска и расчета оптимальных решений. Работаю в команде, управляя водительским составом. Общаясь с клиентами, развиваю опыт коммуникации и разрешения конфликтных ситуаций. Ответственно подхожу к выполнению условий и сроков контрактов.",
        pastJobTitle: "1999 – 2005: СП «Белкарго»",
        pastJobDate: "июль 1999 - октябрь 2005",
        pastJobText:
            "Cпециалист по организации международных перевозок. Приобрел навыки ведения документооборота, коммуникации, стрессоустойчивости и умения находить решение в конфликтных ситуациях.",
        review: "отзыв SolbegSoft",
        objectiveContent: "Front-end разработчик",
        educationTitle: "Белорусский национальный технический университет",
        educationDate: "сентябрь 1993 - июнь 1998",
        educationText: "инженер-экономист",
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
        experience: "Experience",
        all: "All",
        name: "Dmitry Kosenko",
        internshipTitle: "SolbegSoft internship",
        internshipDate: "January - April 2022",
        internshipText:
            "During the internship, a small application (SPA) was developed (a browser-based application for taking into account the results and progress of the game of billiards)",
        coursesTitle: "Courses «TeachMeSkills» Front-end Developer",
        coursesDate: "April - December 2021",
        coursesText:
            "The basics of HTML, CSS and JavaScript, ReactJS, Redux, TypeScript, Webpack have been successfully studied. The knowledge has been implemented on numerous projects. The training ended with the project of the SPA online store on React in conjunction with Redux Thunk to control the state of the application and asynchronous requests.",
        currentJobTitle: "Aerostar LLC",
        currentJobDate: "November 2005 - Present",
        currentJobText:
            "Head of the transport department.I use the skills of planning, searching and calculating optimal solutions for logistics development in conditions of constantly changing initial data. I deal with clients, gain experience in communication and conflict resolution. I take a responsible approach to fulfilling the terms and conditions of contracts.",
        pastJobTitle: "JV Belkargo",
        pastJobDate: "July 1999 - October 2005",
        pastJobText:
            "A specialist in the organization of international transportation. I acquired the skills of document management, communication, stress tolerance and the ability to find solutions in conflict situations.",

        review: "review SolbegSoft",

        objectiveContent: "Front-end developer",
        educationTitle: "Belarusian National Technical University",
        educationDate: "September 1993 - June 1998",
        educationText: "engineer-economist",
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
