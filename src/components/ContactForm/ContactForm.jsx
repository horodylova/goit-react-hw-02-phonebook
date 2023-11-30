import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const id = nanoid();
    addContact({ id, name, number });

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label htmlFor="number">
        Number:
        <input type="tel" id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};


