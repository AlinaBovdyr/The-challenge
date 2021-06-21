import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ label, children }) => {
  return (
    <li>
      {label}
      {children}
    </li>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Item;