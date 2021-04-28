import React from 'react';

import './custom-button.styles.scss';

import { useHistory } from 'react-router-dom';

const CustomButton =  ({children,buttonType,animate,animatein,animateout,path = "", ...otherProps}) => {
    const history = useHistory();
        
        const animateTransition =  () => {
                animatein();
                setTimeout(animateout,1000)
        }

        const handleClick = async () => {
            if (animate) {
                animateTransition();
                setTimeout(()=>history.push(path),500)
            } else {
                history.push(path);
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