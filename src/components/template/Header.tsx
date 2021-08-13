import useAppData from '../../data/hook/useAppData';
import SwitchThmeBtn from './SwitchThemeBtn';
import Title from './Title';

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
                 flex flex-grow justify-end 
            `}>
                <SwitchThmeBtn theme={ theme } switchTheme={ handleTheme }/>
            </div>
        </div>
    )
}