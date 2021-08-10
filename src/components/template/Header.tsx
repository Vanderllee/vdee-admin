import Title from './Title';

type HeaderProps = {
    title: string;
    subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
    return (
        <div>          
            <Title title={title} subtitle={subtitle}/>
        </div>
    )
}