import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { StyledFiltrWrap } from './Filter.styled';

export const Filter = ({ searchContact }) => {
  const filter = useSelector(getFilter);

  return (
    <StyledFiltrWrap>
      <span>Find contacts by name</span>

      <input type="text" value={filter} onChange={searchContact} />
    </StyledFiltrWrap>
  );
};
