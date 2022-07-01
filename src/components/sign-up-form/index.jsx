import { useState } from 'react'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input';

import "./styles.scss"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignupForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (password !== confirmPassword){ 
            alert("PAsswords do not match");
            return;
        }    
        try{
        const { user } = await createAuthUserWithEmailAndPassword(email, password)
        createUserDocumentFromAuth(user, {displayName});
        resetFormFields();
        } catch (error){
            console.log(error)
        }
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({
            ...formFields, [name]: value
        })
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Display Name"
                    type="text" 
                    required
                    onChange={handleChange}
                    value={displayName}
                    name="displayName"
                />

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

                <FormInput 
                    label="Confirm PAssword"
                    type="password" 
                    required
                    onChange={handleChange}
                    value={confirmPassword}
                    name="confirmPassword"
                />

                <button type="submit"> Sign Up </button>
            </form>
        </div>
    )
}

export default SignupForm;