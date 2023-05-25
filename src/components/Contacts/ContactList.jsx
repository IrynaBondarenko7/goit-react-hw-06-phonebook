import {
  StyledContactList,
  StyledContactsItem,
  StyledDeleteBtn,
  StyledNumber,
} from './ContactList.styled';
import { MdClose } from 'react-icons/md';
export const ContactList = ({ contacts, deleteContactfromList }) => {
  return (
    <StyledContactList>
      {contacts.map(contact => {
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
