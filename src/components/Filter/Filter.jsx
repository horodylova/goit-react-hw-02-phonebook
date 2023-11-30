import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label>
  Find contact by name:
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}  
  />
</label>
);

Filter.propTypes = {
value: PropTypes.string.isRequired,
onChange: PropTypes.func.isRequired,
};