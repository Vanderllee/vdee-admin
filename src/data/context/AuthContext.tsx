import { Children, createContext, ReactNode, useState } from 'react';
import firebase from '../../firebase/config';
import User from '../../model/User';
import route from 'next/router'


type AuthContextPro = {
    user?: User;
    loginGoogle?: () => Promise<void>;
    children?: ReactNode
    
}


/*type FirebaseUserProps = {
    firebaseUser: firebase.User;
}*/

const AuthContext = createContext<AuthContextPro>({});

   /*async function firebaseUser({ firebaseUser } : FirebaseUserProps) {

        const token = await firebaseUser.getIdToken()
       
        return {
            uid: firebaseUser.uid,
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            token: token,
            provider: firebaseUser.providerData[0].providerId,
            image: firebaseUser.photoURL
        }
   } */

export function AuthProvider(props: AuthContextPro) {

    const [user, setUser ] = useState<User>(null);

    async function loginGoogle() {
        route.push('/ajustes')
    }

    return (
        <AuthContext.Provider value={{ 
            user,
            loginGoogle 
        }}>
            {
                props.children
            }
        </AuthContext.Provider>
    )
}

export default AuthContext;