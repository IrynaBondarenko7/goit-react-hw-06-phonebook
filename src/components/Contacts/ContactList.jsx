import { StyledContactList, StyledContactsItem } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContactfromList }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => {
        return (
          <StyledContactsItem key={contact.id}>
            <p>
              {contact.name}
              <span>{contact.number}</span>
            </p>
            <button onClick={() => deleteContactfromList(contact.id)}>
              Delete
            </button>
          </StyledContactsItem>
        );
      })}
    </StyledContactList>
  );
};
