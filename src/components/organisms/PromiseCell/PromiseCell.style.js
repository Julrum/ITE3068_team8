import styled from 'styled-components'

export const Area = styled.h1`
    max-lines: 1;
    max-width: 90%;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 5%;
    margin-bottom: 5%;

    font-size: 400%;

    opacity: 0.3;
    transition: all 0.2s;
`;

export const Promise = styled.div`
    position: relative;
    max-width: 70%;

    margin: auto;

    z-index: 1;
    opacity: 1;
    transition: all 0.2s;
`;

export const ArrowImage = styled.div`
    width: 30%;
    height: 30%;
    position: absolute;
    background: url(${props => props.background});
    background-position: center;
    background-size: cover;

    top: 50%;
    left: 40%;
    opacity: 0;

    transform: translate(50%,-30%);
    -o-transform: translate(50%,-30%);
    -ms-transform: translate(50%,-30%);
    -moz-transform: translate(50%,-30%);
    -webkit-transform: translate(50%,-30%);
    transition: all 0.2s;
`;

export const Cell = styled.div`
    position: absolute;
    width: 25em;
    height: 15em;

    display: flex;

    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        ${Promise}{
            opacity: 0;
        }
        ${Area}{
            opacity: 0.8;
            transform: translate(-150%,-100%) scale(2);
            -o-transform: translate(-150%,-100%) scale(2);
            -ms-transform: translate(-150%,-100%) scale(2);
            -moz-transform: translate(-150%,-100%) scale(2);
            -webkit-transform: translate(-130%,-90%) scale(2);
        }
        ${ArrowImage}{
            opacity: 0.8;
            left: 55%;
            transform: translate(50%,-30%);
            -o-transform: translate(50%,-30%);
            -ms-transform: translate(50%,-30%);
            -moz-transform: translate(50%,-30%);
            -webkit-transform: translate(50%,-30%);
        }

    }

`;