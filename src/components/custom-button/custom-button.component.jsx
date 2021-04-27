import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children,buttonType, ...otherProps}) => (
    <div className="button-container">
        <div className="button-screen"></div>
        <button className={`${buttonType}-button custom-button`} {...otherProps}>
            {children}
        </button>
    </div>
  
);

export default CustomButton;