import { createContext, ReactNode } from "react";

type CreateContextProps = {
    name: string;
}

type AppProviderProps = {
    children: ReactNode;
}

const AppContext = createContext({} as CreateContextProps);



export function AppProvider({ children }: AppProviderProps ) {
    return (
        <AppContext.Provider value={{
            name: 'Teste contextAPI'
        }}>

            { children }

        </AppContext.Provider>
    )
}

export default AppContext;

