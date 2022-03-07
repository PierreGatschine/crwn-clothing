import React from 'react';
import './styles.scss'

const CustomButton = ({children, ...otheProps}) => {
    return (
        <button className='custom-button' {...otheProps}>
            {children}
        </button>
    );
};

export default CustomButton;