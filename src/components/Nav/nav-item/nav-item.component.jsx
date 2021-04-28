import React from 'react';

import './nav-item.styles.scss'

import { useHistory } from 'react-router-dom'

const NavItem = ({redirect,click,path,children}) => {
    const history = useHistory();
    const handleClick = () => {
        if (redirect) {
            click();
            setTimeout(()=> {
                history.replace(path)
            },500)
        } else {
            click();
        }
    }

    return <div className="nav-item" onClick={handleClick}>{children.toUpperCase()}</div>
}

export default NavItem;