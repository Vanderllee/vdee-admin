import { createContext, ReactNode, useState } from "react";

type Theme = 'dark' | '';

type CreateContextProps = {
    theme: Theme;
    handleTheme: () => void;
}

type AppProviderProps = {
    children: ReactNode;
}

const AppContext = createContext({} as CreateContextProps);



export function AppProvider({ children }: AppProviderProps ) {

    const [theme, setTheme] = useState<Theme>('dark');

    function handleTheme() {
        setTheme(theme === '' ? 'dark': '');
    }

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

