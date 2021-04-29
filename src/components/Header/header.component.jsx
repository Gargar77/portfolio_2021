import React from 'react';

import './header.styles.scss';

const Header = ({withSubheading = false,title,subtitle,klass}) => {
    let subtitleEl = null;

    if (withSubheading) subtitleEl = <h2>{subtitle}</h2>;
    return (
    <div className={`${klass} header`}>
        <h1>{title}</h1>
        {subtitleEl}
    </div>
    
    )
}

export default Header;