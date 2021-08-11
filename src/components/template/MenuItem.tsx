import Link from 'next/link';

import { ReactNode } from "react"


type MenuItemProps ={
    title: string;
    url?: string;
    icone: ReactNode;
    className?: string;
    onClick?: (event: any) => void;
}

export default function MenuItem({ title, url, icone, onClick, className }: MenuItemProps) {

    function linkRender() {
        return (
            <a className={`
                    flex flex-col justify-center items-center
                    h-20 w-20 text-gray-600 dark:text-gray-200
                    ${className}
            `}>
                    { icone }
                    <span className={`
                        text-xs font-light 
                    `}>{ title }</span>
                </a>
        )
    }

    return (
        <li 
            onClick={onClick} 
            className={`
                hover:bg-gray-100 
                cursor-pointer
                dark:hover:bg-gray-800
            `}>

            {
                url 
                ? 
                    (
                        <Link href={ url }>
                
                            { linkRender() }
                    
                        </Link>
                    ) 

                : ( linkRender() )
            }
        </li>
    )
}