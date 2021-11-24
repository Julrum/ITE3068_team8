import styled, { css } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 180px;
  height: 60px;
`;

export const ProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3px;
  ${(props) =>
    props.url === '' &&
    css`
      z-index: -10;
    `}
`;

export const LabelLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.header2};
  font-weight: 600;
  margin-left: 30px;
`;
