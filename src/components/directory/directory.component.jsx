import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: "Pastas",
                    imageUrl: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1885&q=80",
                    id: 1
                },
                {
                    title: "Mains",
                    imageUrl: "https://images.unsplash.com/photo-1577271141104-b6bd7b76b8e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
                    id: 2
                },
                {
                    title: "Desserts",
                    imageUrl: "https://i2.wp.com/thenotsocreativecook.com/wp-content/uploads/2013/09/thenotsocreativecook-lecheflan3.jpg",
                    id: 3
                },
                {
                    title: "Ready to Cook",
                    imageUrl: "https://images.unsplash.com/photo-1571067224158-622a54542fed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
                    id: 4
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;