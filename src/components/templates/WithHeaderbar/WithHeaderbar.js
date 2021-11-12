import React from 'react';
import Headerbar from '../../organisms/Headerbar';
import {
  StyledWithHeaderbar,
  StyledContent,
  HeaderbarSpace,
} from './WithHeaderbar.style';

const WithHeaderbar = ({ children }) => (
  <StyledWithHeaderbar>
    <Headerbar />
    <HeaderbarSpace />
    <StyledContent>{children}</StyledContent>
  </StyledWithHeaderbar>
);

export default WithHeaderbar;
