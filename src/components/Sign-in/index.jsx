import React from 'react';
//import FormInput from '../form-input';
//import CustomButton from '../Custom-button';
import { signInWithGoogle, createUserDocumentFromAuth } from '../../firebase/Utils'
import './styles.scss'


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGoogle()
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            
        </div>
    );
};

export default SignIn;

/* class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }


    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        label="email"
                        required 
                    />
                    
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}  
                        handleChange={this.handleChange} 
                        label="password"
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
 
} 

export default SignIn;*/