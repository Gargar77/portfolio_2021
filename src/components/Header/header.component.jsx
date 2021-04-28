import React from 'react';

import './header.styles.scss';

const Header = ({withSubheading = false,title,subtitle,klass,titleSize,subtitleSize}) => {
    let subtitleEl = null;

    if (withSubheading) subtitleEl = <h2 style={{fontSize:`${subtitleSize}rem`}}>{subtitle}</h2>;
    return (
    <div className={`${klass} header`}>
        <h1 style={{fontSize:`${titleSize}rem`}}>{title}</h1>
        {subtitleEl}
    </div>
    
    )
}

export default Header;