import styled from 'styled-components';
import backgroundimage from '../../assets/image/main_background.png';

export const StyledHome = styled.div`
width: 100%;
height: calc(100vh - 72px);
display: flex;
justify-content: center;
background: url(${backgroundimage});
background-size: 100% 28%;
background-repeat: no-repeat;
background-attachment: local;
overflow: auto;

transform: scale(1);
-webkit-transform: scale(1);
-moz-transform: scale(1);
-ms-transform: scale(1);
-o-transform: scale(1);
`;

export const MainContent = styled.div` 
width: 100%;
height: 100%;
max-width: 1500px;
`

export const Tail = styled.div` 
width: 100%;
height: 12px;
`