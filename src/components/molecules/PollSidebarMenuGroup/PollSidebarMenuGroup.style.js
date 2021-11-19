import styled from 'styled-components';

export const StyledPollSidebarMenuMain = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.warning};
  font-weight: bold;
  font-size: 1.5rem;
  padding: 16px 0px 16px 20px;
`;

export const StyledPollSidebarMenuSub = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.success};
  font-size: 1.1rem;
  padding: 12px 0px 12px 36px;
`;