import { signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, auth } from  "../../utils/firebase/firebase.utils"
import SignupForm from "../../components/sign-up-form";
const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }


    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In With Google PopUp</button>
            <SignupForm />
        </div>
        
    )
}

export default SignIn