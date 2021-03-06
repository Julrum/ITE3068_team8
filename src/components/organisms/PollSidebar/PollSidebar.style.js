import styled from 'styled-components';

export const StyledPollSidebarContainer = styled.div`
  overflow: auto;
  height: calc(100% - 72px);
  width: 227px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 48px 24px 48px 24px;
`;
