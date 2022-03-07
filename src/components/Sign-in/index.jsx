import React from 'react';
import FormInput from '../form-input';
import CustomButton from '../Custom-button';
import './styles.scss'

class SignIn extends React.Component {
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

                    <CustomButton type="submit">SIGN IN</CustomButton>
                </form>
            </div>
        );
    }
 
}

export default SignIn;