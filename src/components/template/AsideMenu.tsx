import { AdjustmentsIcon, BellIcon, HomeIcon} from "../icons";
import MenuItem from "./MenuItem";


export default function AsideMenu() {
    return (
        <aside>
            <ul>
                <MenuItem url='/' title='Início' icone={ HomeIcon }/>
                <MenuItem url='/configuracoes' title='Configurações' icone={ AdjustmentsIcon }/>
                <MenuItem url='/notificaçoes' title='Notificações' icone={ BellIcon }/>
            </ul>

        </aside>
    )
}