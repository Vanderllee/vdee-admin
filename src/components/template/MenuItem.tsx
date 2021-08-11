import Link from 'next/link';

import { ReactNode } from "react"


type MenuItemProps ={
    title: string;
    url: string;
    icone: ReactNode;
}

export default function MenuItem({ title, url, icone }: MenuItemProps) {
    return (
        <li className={`hover:bg-gray-100`}>

            <Link href={ url }>
                <a className={`
                    flex flex-col justify-center items-center
                    h-20 w-20
                `}>
                    { icone }
                    <span className={`
                        text-xs font-light text-gray-600
                    `}>{ title }</span>
                </a>
                
            </Link>
        </li>
    )
}