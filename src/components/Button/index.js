import React from 'react';
import './style.css';

const Button = ({name, showInput, ...props}) => (
  <button {...props}>{!showInput ? 'Add sentence' : 'Hide'}</button>
);

export default Button;
