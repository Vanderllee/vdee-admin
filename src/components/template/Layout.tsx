import { ReactNode } from "react";

import Header from "./Header";
import Content from "./Content";
import AsideMenu from "./AsideMenu";
import useAppData from "../../data/hook/useAppData";



type LayoutProps = {
    title: string;
    subtitle: string;
    children?: ReactNode;
}

export default function Layout({ title, subtitle, children }: LayoutProps) {

        const { theme } = useAppData();

    return (
        <div className={` ${ theme } flex h-screen w-screen `}>
            <AsideMenu />
            <div className={`
                flex flex-col w-full p-7 
                bg-gray-300 dark:bg-gray-800

            `}>
                <Header title={title} subtitle={subtitle} />
                <Content>
                    {children}
                </Content>
            </div>
        </div>
    )
}