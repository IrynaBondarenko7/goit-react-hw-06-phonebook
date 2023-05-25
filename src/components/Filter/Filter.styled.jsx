import styled from 'styled-components';
export const StyledFiltrWrap = styled.label`
  display: flex;
  flex-direction: column;
  width: 400px;
  row-gap: 15px;
  padding-top: 20px;
`;

export const StyledFilterTextWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 250px;
  svg {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 10px;
  }
`;
export const StyledInput = styled.input`
  height: 30px;
  width: 250px;
  padding: 0 5px;
`;
