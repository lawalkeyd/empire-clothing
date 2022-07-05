import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, auth } from  "../../utils/firebase/firebase.utils"
import SignupForm from "../../components/sign-up-form";
import SignInForm from "../../components/sign-in-form";

import "./styles.scss"

const Authentication = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }


    return (
        <div className="authentication-container">
            <SignupForm />
            <SignInForm />
        </div>
        
    )
}

export default Authentication