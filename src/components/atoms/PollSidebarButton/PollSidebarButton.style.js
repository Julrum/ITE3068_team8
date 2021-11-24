import styled from 'styled-components';

export const StyledPollSidebarMainButtonContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgDivider};
  }
  margin: 20px 0px 0px 0px;
`;

export const StyledPollSidebarMainButtonTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 12px 0px 12px 12px;
`;

export const StyledPollSidebarMainButtonTitleText = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${props => props.selected ? ({ theme }) => theme.colors.primaryMoreDarken : ''};
`;

export const StyledPollSidebarMainButtonArrowContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 14px;
  justify-content: center;
  margin: 16px 0px 10px 20px;
  overflow: hidden;
`;

export const StyledPollSidebarMainButtonArrowImage = styled.img`
  height: 14px;
  width: 14px;
  object-fit: cover;
  justify-content: right;
  transform: ${props => (props.isOpen ? `` : `rotate(180deg)`)};
`;

export const StyledPollButtonLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${props => props.selected ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.pollButtonLineLight};
`;