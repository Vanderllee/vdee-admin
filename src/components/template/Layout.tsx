import { ReactNode } from "react";

import Header from "./Header";
import Content from "../Content";
import AsideMenu from "./AsideMenu";



type LayoutProps = {
    title: string;
    subtitle: string;
    children?: ReactNode;
}

export default function Layout({title, subtitle, children}: LayoutProps) {
    return (
        <div>
            <Header title={ title } subtitle={ subtitle }/>
            <Content>
                { children }
            </Content>
            <AsideMenu />
        </div>
    )
}