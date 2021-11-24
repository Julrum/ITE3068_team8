import styled from 'styled-components';

export const StyledPollSidebarButtonMenuMain = styled.button`

  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  text-align: left;
  color: ${props => props.selected ? ({ theme }) => theme.colors.primaryMoreDarken : ''};
  background-color: ${({ theme }) => theme.colors.pollButtonBasic};
  &:hover {
    background-color: ${({ theme }) => theme.colors.pollButtonHover};
  }

  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 16px;
  padding: 20px 0px 16px 20px;
`;

export const StyledPollSidebarButtonMenuSub = styled.button`

  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  text-align: left;
  color: ${props => props.selected ? ({ theme }) => theme.colors.primaryMoreDarken : ''};
  background-color: ${({ theme }) => theme.colors.pollButtonBasic};
  &:hover {
    background-color: ${({ theme }) => theme.colors.pollButtonHover};
  }

  font-size: 0.9rem;
  font-weight: ${props => props.selected ? 'bold' : ''};
  padding: 12px 0px 16px 36px;
`;

export const StyledPollButtonLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${props => props.selected ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.pollButtonLineLight};
`;