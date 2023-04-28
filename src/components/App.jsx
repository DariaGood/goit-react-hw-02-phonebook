import React, { Component } from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.onInputValue = this.onInputValue.bind(this);
    this.filterContacts = this.filterContacts.bind(this);
  }

  addContact(newContact) {
    if (this.state.contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  }

  deleteContact(id) {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }


  

  onInputValue(e) {
    //const filterValue = e.target.value;
    this.setState({ filter: e.target.value });
  }

  filterContacts() {
    const filterValue = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          onAddContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onInputValue={this.onInputValue} />
        <ContactList contacts={this.filterContacts()}
        onDeleteContact={this.deleteContact}/>
      </div>
    );
  }
}
