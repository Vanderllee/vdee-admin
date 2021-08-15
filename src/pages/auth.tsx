/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { WarnIcon } from "../components/icons";



export default function Auth() {

    const [mode, setMode] = useState<'login' | 'signup'>('login');

    const [error, setError] = useState(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleError(msg: string, timeSeconds = 5) {
        setError(msg)
        setTimeout(() => setError(null), timeSeconds * 1000 )
    }

    function submit() {
        if (mode === 'login') {
            console.log('login')
            
        } else {
            console.log('signup')
           
        }
    }


    return (

        <div className="flex  h-screen items-center justify-center">

            <div className=" hidden md:block md:w-1/2 lg:2/3">
                <img
                    src="https:source.unsplash.com/random"
                    alt="Imagem da Tela de Autenticação"
                    className="h-screen w-full object-cover"
                />
            </div>

            <div className="m-10 w-full md:w-1/2 lg:1/3">

                <h1 className={`
                text-3xl font-bold mb-5 
            `}>
                    {mode === 'login' ? 'Entre com a sua conta' : 'Cadastra-se na Plataforma'}
                </h1>


                {
                    error ? (
                        <div className={`
                            flex items-center
                            bg-red-400 text-white py-3 my-2
                            border border-red-700 rounded-lg
                        `}>
                            {WarnIcon(7)}
                            <span className={`
                            ml-3 text-sm
                        `}>{ error }</span>
                        </div>
                    ) : (null)
                }


                <AuthInput
                    title="Email"
                    value={email}
                    type='email'
                    required
                    changedValue={setEmail}

                />

                <AuthInput
                    title="Senha"
                    value={password}
                    type='password'
                    required
                    changedValue={setPassword}
                />

                <button onClick={submit} className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-2 mt-6
            `}>
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className='my-6 border-gray-300 w-full' />

                <button onClick={submit} className={`
                w-full bg-red-500 hover:bg-red-400
                text-white rounded-lg px-4 py-2
            `}>
                    Entrar com o google
                </button>

                {
                    mode === 'login'
                        ? (
                            <p className="mt-5">
                                Novo na plataforma ?
                                <a
                                    className={`
                                 text-blue-500 hover:text-blue-700 font-semibold
                                 cursor-pointer ml-1
                            `}
                                    onClick={() => setMode('signup')}
                                >
                                    Crie uma conta Gratuitamente
                                </a>
                            </p>
                        )
                        : (
                            <p className="mt-5">
                                Já faz parte da plataforma ?
                                <a
                                    className={`
                             text-blue-500 hover:text-blue-700 font-semibold
                             cursor-pointer ml-1
                        `}
                                    onClick={() => setMode('login')}
                                >
                                    Entre com suas credenciais
                                </a>
                            </p>
                        )
                }
            </div>
        </div>

    )
}