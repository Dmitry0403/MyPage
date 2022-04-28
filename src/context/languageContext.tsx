import React, { PropsWithChildren, useContext, useState } from "react";
import { language, LanguageContext, TLanguage } from "./language";

interface IComponent {}

export const LanguageProvider = (props: PropsWithChildren<IComponent>) => {
    const [languageTheme, setLanguageTheme] = useState<TLanguage>(
        language.english
    );
    return (
        <LanguageContext.Provider
            value={{ languageTheme, setLanguageTheme }}
            {...props}
        />
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageContext");
    }
    const { languageTheme, setLanguageTheme } = context;
    return { languageTheme, setLanguageTheme, language };
};
