import useAppData from '../../data/hook/useAppData';
import SwitchThemeBtn from './SwitchThemeBtn';
import Title from './Title';
import UserAvatar from './UserAvatar';

type HeaderProps = {
    title: string;
    subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {

        const {handleTheme, theme } = useAppData();

    return (
        <div className={`flex`}>          
            <Title title={title} subtitle={subtitle}/>

            <div className={`
                 flex flex-grow justify-end items-center
            `}>
                <SwitchThemeBtn theme={ theme } switchTheme={ handleTheme }/>

                <UserAvatar className=" ml-3"/>
            </div>

            
        </div>
    )
}