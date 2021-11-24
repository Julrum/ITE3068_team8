import styled, { css } from 'styled-components';

export const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const SidebarItem = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 24px 10px 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgDivider};
  }
  ${(props) =>
    props.index === props.selected &&
    css`
      background-color: ${({ theme }) => theme.colors.primaryLighten};
      :hover {
        background-color: ${({ theme }) => theme.colors.primaryTransparent};
      }
    `}
`;

export const ContentLayout = styled.div`
  width: 100%;
  height: calc(100% - 72px);
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: 120px;
`;

export const Header = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

export const Label = styled.div`
  margin-bottom: 10px;
`;

export const Section = styled.div`
  max-width: 100%;
  border: hidden;
  display: flex;
  flex-direction: column;
`;
