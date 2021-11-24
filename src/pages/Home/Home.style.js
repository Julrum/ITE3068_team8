import styled from 'styled-components';
import backgroundimage from '../../assets/image/main_background.png';

export const StyledHome = styled.div`
width: 100%;
height: calc(100vh - 72px);
background: url(${backgroundimage});
background-size: 100% 28%;
background-repeat: no-repeat;
background-attachment: local;
overflow: auto;
`;

export const MainContent = styled.div` 
width: 100%;
height: 100%;
`

export const Tail = styled.div` 
width: 100%;
height: 12px;
`