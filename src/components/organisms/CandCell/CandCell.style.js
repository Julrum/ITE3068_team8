import styled from 'styled-components';

export const Introduction = styled.div`
    position: fixed;
    opacity: 1;
    z-index: 1;
    transition: all 0.3s;
    text-decoration: none;
    bottom: 0;
    margin-left: 1.5%;
    margin-bottom: 1.5%;
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    background: url(${props => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    
    transition: all 0.3s;

    &::before {
        content: "";
        opacity: 0.5;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: #000;
    }

`;

export const Cell = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;

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
        }

        ${Introduction}{
            opacity: 0;
        }
    }
`;

