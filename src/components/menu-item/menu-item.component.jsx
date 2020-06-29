import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu.styles.scss'

const MenuItem = ({title, imageUrl, history, linkUrl, match}) => (
    <div className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);