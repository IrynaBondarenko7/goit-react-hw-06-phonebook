import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactList } from './Contacts/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { StyledLayout } from './Layout/Layout.styled';
import { StyledContactsTitle, StyledTitle } from './App.styled';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    } else {
      return initialContacts;
    }
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = value => {
    setContacts(prevState => {
      return [...prevState, value];
    });
  };
  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };
  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <StyledLayout>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm addContact={addContact} contacts={contacts} />
      <StyledContactsTitle>Contacts</StyledContactsTitle>
      <Filter filter={filter} searchContact={changeFilter} />
      <ContactList contacts={filtredContacts} deleteContact={deleteContact} />
    </StyledLayout>
  );
};
ContactForm.propTypes = {
  addContact: PropTypes.func,
  contacts: PropTypes.array.isRequired,
};
Filter.propTypes = {
  filter: PropTypes.string,
  searchContact: PropTypes.func,
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func,
};
