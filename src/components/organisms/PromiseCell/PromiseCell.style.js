import styled from 'styled-components'

export const Area = styled.h1`
    max-width: 20em;
    width: fit-content;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 5%;

    text-align: right;
    font-size: 400%;
    word-break: keep-all;

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

    top: 44%;
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
            transform: translate(-1.3em,-1em) ;
            -o-transform: translate(-1.3em,-1em) ;
            -ms-transform: translate(-1.3em,-1em) ;
            -moz-transform: translate(-1.3em,-1em) ;
            -webkit-transform: translate(-1.3em,-1em) ;
        }
        ${ArrowImage}{
            opacity: 0.7;
            left: 55%;
            transform: translate(50%,-30%);
            -o-transform: translate(50%,-30%);
            -ms-transform: translate(50%,-30%);
            -moz-transform: translate(50%,-30%);
            -webkit-transform: translate(50%,-30%);
        }

    }

`;