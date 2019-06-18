import React from 'react';
import './style.css';

const Input = ({name, hidden = false, ...props}) => {
  if (hidden) {
    return null;
  }
  return (
    <div className="input-container">
      <h5>{name}</h5>
      <input {...props} />
    </div>
  );
};

export default Input;
