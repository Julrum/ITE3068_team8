import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeaderbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 72px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  box-shadow: 0px 3px 5px ${({ theme }) => theme.colors.boxShawdow};
  z-index: 20;
  display: flex;
  justify-content: center;
`;

export const StyledTitle = styled(Link)`
  width: 227px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.bold};
  font-size: ${({ theme }) => theme.fontSizes.header2};
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  width: 130px;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    font-weight: 700;
  }
`;

export const StyledButtonArea = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  div:nth-child(even) {
    margin: 0px 10px 0px 10px;
  }
  a:nth-child(even) {
    margin: 0px 10px 0px 10px;
  }
`;

export const ProfileBadge = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryLighten};
  cursor: pointer;
`;

export const StyledBadgeArea = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 30px;
`;
