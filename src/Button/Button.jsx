import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ className, value, type, onClick }) => (
  <div
    onClick={() => onClick(value)}
    onKeyDown={() => {}}
    role="button"
    tabIndex={0}
    className={`button ${type} ${className}`}
  >
    {value}
  </div>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  value: undefined,
  type: 'number',
};

export default Button;
