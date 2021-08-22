import { Children, createContext, ReactNode, useEffect, useState } from 'react';
import firebase from '../../firebase/config';
import Cookies from 'js-cookie';
import User from '../../model/User';
import route from 'next/router'


type AuthContextPro = {
    user?: User;
    children?: ReactNode;
    loading: boolean;
    loginGoogle?: () => Promise<void>;
    logout?: () => Promise<void>;
    login?: ({email, password}:loginWithEmailPassword) => Promise<void>;
    createUser?: ({email, password}:loginWithEmailPassword) => Promise<void>;
    
}

type loginWithEmailPassword = {
    email: string;
    password: string;
}


const AuthContext = createContext<AuthContextPro>({} as AuthContextPro);

    //recebe os dados do firebase e constroi o objeto usuario
   async function firebaseUser(firebaseUser:firebase.User) {

        const token = await firebaseUser.getIdToken()
       
        return {
            uid: firebaseUser.uid,
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            token: token,
            provider: firebaseUser.providerData[0].providerId,
            imageUrl: firebaseUser.photoURL
        }
   } 

   //gerenciar o cookie
   function handleCookie(value: string) {
       if(value) {
            Cookies.set('vdee-admin-auth', value, {expires: 7})
       } else {
            Cookies.remove('vdee-admin-auth')
       }
   }



export function AuthProvider(props: AuthContextPro) {

    const [loading, setLoading ] = useState(true);
    const [user, setUser ] = useState<User>(null);


    //configurar sessão do cookie
   async function configSession(userFirebase: firebase.User) {
        if(userFirebase?.email) {
            const user = await firebaseUser(userFirebase);
            setUser(user);
            handleCookie('true');
            setLoading(false)
            
            return user.email;

        } else {
            setUser(null);
            handleCookie('false');
            setLoading(false);
            return false;
        }
    }

    //login with email and password
    async function login({ email, password }: loginWithEmailPassword ) {
        
        try {
         setLoading(true)
         const response= await firebase.auth().signInWithEmailAndPassword(email, password);
 
            await configSession(response.user)
   
         route.push('/');
 
        } finally {
         setLoading(false)
        }
       
 
    }

    //cadastrar um usuario usando email/senha google
    async function createUser({ email, password }: loginWithEmailPassword ) {
        
        try {
            setLoading(true)
            const response= await firebase.auth().createUserWithEmailAndPassword(email, password);
    
            await configSession(response.user)
    
            route.push('/');
 
        } finally {
         setLoading(false)
        }
       
 
    }

    //login with google
    async function loginGoogle() {
        
       try {
        setLoading(true)
        const response= await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

        await configSession(response.user)
  
        route.push('/');

       } finally {
        setLoading(false)
       }
      

    }

    async function logout() {
        try {
            setLoading(true);
            await firebase.auth().signOut();
            await configSession(null);

        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
       if(Cookies.get('vdee-admin-auth')) {
        const cancel =  firebase.auth().onIdTokenChanged(configSession)
        return () => cancel();
       } else {
           setLoading(false);
       }
    }, [])

    return (
        <AuthContext.Provider value={{ 
            user,
            loading,
            loginGoogle,
            logout, 
            login,
            createUser
        }}>
            {
                props.children
            }
        </AuthContext.Provider>
    )
}

export default AuthContext;