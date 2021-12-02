import styled from 'styled-components';

export const StyledHome = styled.div`
width: 100%;
height: calc(100vh - 72px);
overflow: auto;
`;

export const MainContent = styled.div` 
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: fit-content;
z-index: 0;

&::before{
    content: "";
    background: url(${props => props.background});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #FEF7EE;
    opacity: 60%;

    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    justify-self: center;
    height: 264px;
    
    z-index: -1;
}
/* max-width: 1500px; */
`

export const Tail = styled.div` 
width: 100%;
height: 12px;
`