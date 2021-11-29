import styled from 'styled-components';

export const Introduction = styled.div`
    position: absolute;
    max-width: 20%;
    opacity: 1;
    z-index: 1;
    transition: all 0.3s;
    text-decoration: none;
    top: 62%;
    margin: 1.5% 2.5%;

    word-break: keep-all;
`;

export const Background = styled.div`
    width: 140%;
    height: 100%;

    position: relative;
    background: url(${props => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(50%);
    
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    
    transition: all 0.3s;

    &::before {
        content: "";
        opacity: 0.3;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: ${props => props.color};
    }

`;

export const Cell = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    /* display: flex; */

    &:hover {
        ${Background}{
            &::before{
                overflow: hidden;
                opacity: 0;
            }
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -ms-transform: scale(1.1);
            -o-transform: scale(1.1);
            filter: brightness(0.8);
        }

        ${Introduction}{
            opacity: 0;
        }
    }
`;

