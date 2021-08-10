

type TitleProps = {
    title: string;
    subtitle: string;
}

export default function Title({ title, subtitle }: TitleProps) {
    return (
        <div>
            <h1 className = {`

            `}
            >{ title }</h1>

            <h2 className = {`

            
            `} 
            
            >{ subtitle }</h2>
        </div>
    )
}