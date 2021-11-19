import styled from 'styled-components';

export const StyledPollSidebarContainer = styled.div`
  overflow: scroll;
  height: calc(100% - 72px);
  width: 30%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 48px 24px 48px 24px;
  box-shadow: 0px 3px 5px ${({ theme }) => theme.colors.boxShawdow};
`;



//height: calc(100% - 72px);