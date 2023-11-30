import React from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppContainer, Heading1, Heading2 } from './App.styled';

export default class App extends React.Component {
  static propTypes = {
    contacts: PropTypes.array,
  };

  state = {
    contacts: [],
    filter: '',
  };

  addContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
  
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  handleFilterChange = (value) => {
    this.setState({ filter: value });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <AppContainer>
        <Heading1>Phonebook</Heading1>
        <ContactForm addContact={this.addContact} />
        <Heading2>Contacts</Heading2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.handleDeleteContact}
        />
      </AppContainer>)
  }
}

 

  
  

 