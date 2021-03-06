import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="navbar">
            <div className="logo"></div>
            <div className="nav-options">
                <span className="shop">SHOP</span>
                <span className="contact">CONTACT</span>
                <span className="sign-in">SIGN-IN</span>
                <span className="cart-logo">CART</span>
            </div>
        </div>
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <span className="item-logo"></span>
                    <h1 className="item-name">PASTAS</h1>
                    <span className="item-action">Order</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <span className="item-logo"></span>
                    <h1 className="item-name">MAINS</h1>
                    <span className="item-action">Order</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <span className="item-logo"></span>
                    <h1 className="item-name">DESSERTS</h1>
                    <span className="item-action">Order</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <span className="item-logo"></span>
                    <h1 className="item-name">READY TO COOK</h1>
                    <span className="item-action">Order</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;