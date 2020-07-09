import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/logo.svg';

import './header.styles.scss'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' width='100px' height='100px'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/menu'>MENU</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            <Link className='option' to='/abotus'>ABOUT US</Link>
            {
                currentUser ?
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

// Connecting to userReducer to get currentUser state
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);