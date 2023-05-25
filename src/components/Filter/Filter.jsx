import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import {
  StyledFilterTextWrap,
  StyledFiltrWrap,
  StyledInput,
} from './Filter.styled';
import { MdPersonSearch } from 'react-icons/md';

export const Filter = ({ searchContact }) => {
  const filter = useSelector(getFilter);

  return (
    <StyledFiltrWrap>
      <b>Find contacts by name</b>
      <StyledFilterTextWrap>
        <StyledInput
          type="text"
          value={filter}
          onChange={searchContact}
          placeholder="Search name..."
        />
        <MdPersonSearch />
      </StyledFilterTextWrap>
    </StyledFiltrWrap>
  );
};
