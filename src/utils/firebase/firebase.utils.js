// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgETWY17kOI_QjK5T4dDq1wYZagIZesk8",
  authDomain: "empire-clothing-db.firebaseapp.com",
  projectId: "empire-clothing-db",
  storageBucket: "empire-clothing-db.appspot.com",
  messagingSenderId: "280530425409",
  appId: "1:280530425409:web:f645496027e756e74198c0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    "prompt": "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const signInAuthUserWithEmailAndPassword = (email, password) => {
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    switch(errorCode) {
        case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
        case 'auth/user-not-found':
            alert('no user associated with this email')
            break;
        default:
            console.log(error);        
    }
    console.log(error)
    const errorMessage = error.message;
  });
}

export const db = getFirestore();

export const createUserDocumentFromAuth  = async(userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch(error){
            console.log(error);
        }
    }


}

export const createAuthUserWithEmailAndPassword= async (email, password) => {
    if (!email || !password) return; 
    return await createUserWithEmailAndPassword(auth, email, password)
}