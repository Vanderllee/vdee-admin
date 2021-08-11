import { AdjustmentsIcon, BellIcon, HomeIcon} from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";


export default function AsideMenu() {
    return (
        <aside>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20 
            `}>
                <Logo />
            </div>

            <ul>
                <MenuItem url='/' title='Início' icone={ HomeIcon }/>
                <MenuItem url='/ajustes' title='Ajustes' icone={ AdjustmentsIcon }/>
                <MenuItem url='/notifiers' title='Notifiers' icone={ BellIcon }/>
            </ul>

        </aside>
    )
}