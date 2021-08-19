import { Children, createContext, ReactNode, useState } from 'react';
import firebase from '../../firebase/config';
import User from '../../model/User';
import route from 'next/router'


type AuthContextPro = {
    user?: User;
    loginGoogle?: () => Promise<void>;
    children?: ReactNode
    
}




const AuthContext = createContext<AuthContextPro>({});

   async function firebaseUser(firebaseUser : firebase.User) {

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

export function AuthProvider(props: AuthContextPro) {

    const [user, setUser ] = useState<User>(null);

    async function loginGoogle() {
        

       const response= await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

      if(response.user?.email) {
        const userData = await firebaseUser(response.user);

        setUser(userData);
  
        route.push('/');
      }

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