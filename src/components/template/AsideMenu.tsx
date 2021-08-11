import { AdjustmentsIcon, BellIcon, HomeIcon, LogoutItem} from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";


export default function AsideMenu() {
    return (
        <aside className="flex flex-col">
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20 
            `}>
                <Logo />
            </div>

            <ul className="flex-grow">
                <MenuItem url='/' title='Início' icone={ HomeIcon }/>
                <MenuItem url='/ajustes' title='Ajustes' icone={ AdjustmentsIcon }/>
                <MenuItem url='/notifiers' title='Notifiers' icone={ BellIcon }/>
            </ul>

            <ul>
                <MenuItem 
                    title='Sair' 
                    icone={ LogoutItem }
                    onClick={() => console.log('teste de logout')}
                    className={`
                        text-red-600 
                        hover:bg-red-400 hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}