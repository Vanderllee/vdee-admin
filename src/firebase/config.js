import firebase from "firebase/app";
import "firebase/auth";

//se nenhum processo tiver sido inicializado, iniciar.
if(!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }

    firebase.initializeApp(firebaseConfig);
}

export default firebase;