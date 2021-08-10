import { ReactNode } from "react";

import Header from "./Header";
import Content from "./Content";
import AsideMenu from "./AsideMenu";



type LayoutProps = {
    title: string;
    subtitle: string;
    children?: ReactNode;
}

export default function Layout({ title, subtitle, children }: LayoutProps) {
    return (
        <div className={`  flex h-screen w-screen `}>
            <AsideMenu />
            <div className={`
                flex flex-col w-full p-7 
                bg-gray-300

            `}>
                <Header title={title} subtitle={subtitle} />
                <Content>
                    {children}
                </Content>
            </div>
        </div>
    )
}