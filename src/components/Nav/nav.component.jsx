import React from 'react';

import './nav.styles.scss';

const Nav = ({children}) => (
    <div className="nav">
        {children}
    </div>
);

export default Nav;