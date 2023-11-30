import React from 'react';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact, onDelete }) => (
  <li>
    {contact.name}: {contact.number}
    <button type="button" onClick={() => onDelete(contact.id)}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};


