import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactList } from './Contacts/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { StyledLayout } from './Layout/Layout.styled';
import {
  StyledPhonebookWrap,
  StyledContactsTitle,
  StyledTitle,
  StyledTitleWrap,
} from './App.styled';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/filtersSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { FaBook } from 'react-icons/fa';
import { IoMdContacts } from 'react-icons/io';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addContactToList = value => {
    dispatch(addContact(value));
  };
  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };
  const deleteContactfromList = id => {
    dispatch(deleteContact(id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <StyledLayout>
      <StyledPhonebookWrap>
        <StyledTitleWrap>
          <StyledTitle>Phonebook</StyledTitle>
          <FaBook />
        </StyledTitleWrap>

        <ContactForm addContactToList={addContactToList} contacts={contacts} />
        <StyledTitleWrap>
          <StyledContactsTitle>Contacts</StyledContactsTitle>
          <IoMdContacts />
        </StyledTitleWrap>

        <Filter searchContact={changeFilter} />
        <ContactList
          contacts={filtredContacts}
          deleteContactfromList={deleteContactfromList}
        />
      </StyledPhonebookWrap>
    </StyledLayout>
  );
};
ContactForm.propTypes = {
  addContactToList: PropTypes.func,
  contacts: PropTypes.array.isRequired,
};
Filter.propTypes = {
  searchContact: PropTypes.func,
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContactfromList: PropTypes.func,
};
