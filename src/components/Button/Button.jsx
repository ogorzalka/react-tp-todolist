import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
    let buttonClass = [styles.button, styles[props.mode] ].join(' ');
    return (
        <button type={props.type} onClick={props.onClick} className={buttonClass}>{props.children}</button>
    );
}



Button.propTypes = {
    type: PropTypes.string
}

export default Button;
