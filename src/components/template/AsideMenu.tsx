import { AdjustmentsIcon, BellIcon, HomeIcon} from "../icons";
import MenuItem from "./MenuItem";


export default function AsideMenu() {
    return (
        <aside>
            <ul>
                <MenuItem url='/' title='Início' icone={ HomeIcon }/>
                <MenuItem url='/ajustes' title='Ajustes' icone={ AdjustmentsIcon }/>
                <MenuItem url='/notificacoes' title='Notificações' icone={ BellIcon }/>
            </ul>

        </aside>
    )
}