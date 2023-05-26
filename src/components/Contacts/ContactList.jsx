import { useSelector, useDispatch } from 'react-redux';
import {
  StyledContactList,
  StyledContactsItem,
  StyledDeleteBtn,
  StyledNumber,
} from './ContactList.styled';
import { MdClose } from 'react-icons/md';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContactfromList = id => {
    dispatch(deleteContact(id));
  };

  return (
    <StyledContactList>
      {filtredContacts.map(contact => {
        return (
          <StyledContactsItem key={contact.id}>
            <p>
              {contact.name}
              <StyledNumber>{contact.number}</StyledNumber>
            </p>
            <StyledDeleteBtn onClick={() => deleteContactfromList(contact.id)}>
              <MdClose />
            </StyledDeleteBtn>
          </StyledContactsItem>
        );
      })}
    </StyledContactList>
  );
};
