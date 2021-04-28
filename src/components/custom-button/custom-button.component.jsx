import React from 'react';

import './custom-button.styles.scss';

import { useHistory } from 'react-router-dom';

const CustomButton =  ({children,buttonType,animate,path = "", click = () => null, ...otherProps}) => {
    const history = useHistory();

        const handleClick = () => {
            if (animate) {
                animate();
                setTimeout(()=>history.push(path),500)
            } else if (path !== "") {
                history.push(path);
            } else {
                click();
            }
        }

    return (
        <div className="button-container">
            <div className="button-screen"></div>
            <button onClick={handleClick} className={`${buttonType}-button custom-button`} {...otherProps}>
                {children}
            </button>
        </div>
    )
}
  


export default CustomButton;