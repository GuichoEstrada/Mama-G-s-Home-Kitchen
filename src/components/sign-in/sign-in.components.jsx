import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithFacebook } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='Email'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        label='Password'
                        handleChange={this.handleChange}
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton className='signin-google' onClick={signInWithGoogle}><span><FontAwesomeIcon icon='facebook-square'/></span>SIGN IN WITH GOOGLE</CustomButton>
                        <CustomButton className='signin-facebook' onClick={signInWithFacebook}>SIGN IN WITH FACEBOOK</CustomButton>  
                    </div>

                </form>
                
            </div>
        )
    }
}

export default SignIn;