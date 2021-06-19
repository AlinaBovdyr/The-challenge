import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ label, children }) => {
    return (
        <li>
            {label}
            <ul>{children}</ul>
        </li>
    );
};

Item.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.array,
};

export default Item;