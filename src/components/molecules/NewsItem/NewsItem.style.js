import styled, { css } from 'styled-components';
import MicroLink from '@microlink/react';

export const StyledMicroLink = styled(MicroLink)`
  max-width: 100%;
  border: hidden;
  margin: 10px;

  footer {
    span {
      visibility: hidden;
    }
  }

  ${(props) =>
    props.large &&
    css`
      border: hidden;
      margin-bottom: 20px;
      margin-right: 50px;
      min-width: 400px;
    `}
`;
