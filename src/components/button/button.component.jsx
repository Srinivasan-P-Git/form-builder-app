import React from 'react';

import './button.styles.scss';

const Button = ({ children, ...args }) => {
  return (
    <div className="button-container" {...args}>
      {children}
    </div>
  );
};

export default Button;
