import { useState } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input";
import Button from "../button";

import "./styles.scss"


const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setFormFields({
            ...formFields,
            [name]: value
    })
    }
    
    const handleSubmit = (e) => {
        try{
            e.preventDefault();
            signInAuthUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
        


    }

    return (
        <div className='sign-up-container'>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput 
                label="email"
                type="email"
                required
                name="email"
                onChange={handleChange}
                value={email}
            />

            <FormInput 
                label="password"
                type="password" 
                required
                onChange={handleChange}
                value={password}
                name="password"
            />

            <div className="buttons-container">
                <Button type='submit'>
                    Sign In
                </Button>
                <Button type='button' buttonType='google' onClick={signInWithGooglePopup}>
                    Sign In With Google
                </Button>
            </div>

        </form>
    </div>
    )
}

export default SignInForm