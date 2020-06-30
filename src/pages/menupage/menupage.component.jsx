import React from 'react';
import PreviewMenu from '../../components/preview-menu/preview-menu.component'
import MENU_DATA from './menu.data.js';


import './menupage.styles.scss';

class MenuPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: MENU_DATA
        }
    }

    render() {
        const {menu} = this.state;
        return (
            <div className='menu-page'>
                {
                    menu.map(({id, ...otherMenuProps}) => (
                    <PreviewMenu key={id} {...otherMenuProps}/>
                    ))
                }
            </div>)
    }
}

export default MenuPage;