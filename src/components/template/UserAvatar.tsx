/* eslint-disable @next/next/no-img-element */
import Link  from "next/link"
import useAuth from "../../data/hook/useAuth"

type UserAvatarProps = {
    className?: string;
}

export default function UserAvatar({ className }: UserAvatarProps) {

    const { user } = useAuth()

    return (
        // eslint-disable-next-line @next/next/link-passhref
        <Link href="/userProfile">
            <img 
                src={user?.imageUrl ?? '/images/avatar.svg'} 
                alt='Avatar do usuário'
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${className}
                `}
                />
        </Link>
    )
}