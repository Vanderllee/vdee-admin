import { ReactNode } from "react"

import Image from 'next/image';
import Head from 'next/head';

import loadingImage from '../../../public/images/loadingAuthAdmin.gif';
import useAuth from "../../data/hook/useAuth";
import router from "next/router";

interface Props {
    children: ReactNode;
}

export default function ForcedAuth({ children }: Props) {

    const { user, loading } = useAuth()

    function content() {
        return (
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            if(!document.cookie?.includes("vdee-admin-auth")) {
                                window.location.href = "/auth"

                            }
                        `
                    }}/>
                </Head>
                {children}
            </>
        )
    }

    function loadingImg() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loadingImage} alt='Imagem de loading' />
            </div>
        )
    }

    if (!loading && user?.email) {

        return content();

    } else if (loading) {

        return loadingImg();

    } else {
        router.push('/auth');
        return null;
    }
}