import React from 'react';

import PreviewItem from '../preview-item/preview-item.component';

import './preview-menu.styles.scss';

const PreviewMenu = ({title, items}) => (
    <div className='menu-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.map(({id, ...otherItemProps}) => (
                <PreviewItem key={id} {...otherItemProps}/>
            ))}
        </div>
    </div>
)


export default PreviewMenu;