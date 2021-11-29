import styled from 'styled-components'

export const Area = styled.h3`
    max-width: 80%;
    position: relative;

    margin: auto 10%;
    margin-top: 7%;
    margin-bottom: 1%;

    opacity: 1;
`;

export const AreaLarge = styled.h1`
    max-lines: 1;
    max-width: 95%;
    position: relative;
    color: white;
    font-size: 700%;
    top: 50%;
    left: 50%;

    transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);

    margin: auto;

    opacity: 0;
    transition: all 0.2s;
`;

export const Promise = styled.div`
    position: relative;
    max-width: 80%;

    margin: auto;
    margin-top: 0;

    z-index: 1;
    opacity: 1;
    transition: all 0.2s;
`;

export const PlusImage = styled.div`
    position: absolute;
    width: 2.5em;
    height: 2.5em;
    background: url(${props => props.background});
    background-position: center;
    background-size: cover;

    bottom: 0;
    right: 0;
    margin-bottom: 4%;
    margin-right: 4%;

    cursor: pointer;

    opacity: 1;
`;

export const Cell = styled.div`
    border-radius: 15px;
    background-color: #dddddd;

    position: absolute;
    width: 25em;
    height: 15em;
    min-width: 20em;
    

    display: flex;
    flex-direction: column;

    /* &:hover {
        ${Promise}{
            opacity: 0;
        }
        ${Area}{
            opacity: 1;
            transform: translate(-150%,-100%) scale(2);
            -o-transform: translate(-150%,-100%) scale(2);
            -ms-transform: translate(-150%,-100%) scale(2);
            -moz-transform: translate(-150%,-100%) scale(2);
            -webkit-transform: translate(-150%,-100%) scale(2);
        }

    } */

`;