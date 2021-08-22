import { createContext, ReactNode, useEffect, useState } from "react";


type CreateContextProps = {
    theme: string;
    handleTheme: () => void;
}

type AppProviderProps = {
    children: ReactNode;
}

const AppContext = createContext({} as CreateContextProps);



export function AppProvider({ children }: AppProviderProps ) {

    const [theme, setTheme] = useState('dark');

    function handleTheme() {
        const newTheme = theme === '' ? 'dark': '';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        setTheme(savedTheme);
    }, [])

    return (
        <AppContext.Provider value={{
            theme,
            handleTheme
        }}>

            { children }

        </AppContext.Provider>
    )
}

export default AppContext;

