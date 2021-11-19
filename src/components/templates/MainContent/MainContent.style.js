import styled from 'styled-components';
import backgroundimage from '../../../assets/image/main_background.png';

export const StyledMainContent = styled.div`
width: 100%;
height: 100vh;
overflow: auto;
&::-webkit-scrollbar {
  height: 8px;
}
background: url(${backgroundimage});
background-size: 100% 28%;
background-repeat: no-repeat;
background-attachment: local;
`;


