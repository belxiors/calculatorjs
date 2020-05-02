import React from 'react';
import PropTypes from 'prop-types';
import './Display.scss';

const Display = ({ value }) => <div className="display">{value}</div>;

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: undefined,
};

export default Display;
