import React from 'react';

import './menu.styles.scss'

const MenuItem = ({title, imageUrl}) => (
    <div className="menu-item">
        <div className="background-image" 
            style=
                {{
                    backgroundImage: `url(${imageUrl})`
                }}>
        </div>
        <div className="content">
            <span className="item-logo"></span>
            <h1 className="item-name">{title}</h1>
            <span className="item-action">Order</span>
        </div>
    </div>
)

export default MenuItem;