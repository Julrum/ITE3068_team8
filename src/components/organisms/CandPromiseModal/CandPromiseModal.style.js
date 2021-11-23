import styled from 'styled-components'

export const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow-y: auto;
    outline: 0;
`

export const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
`

export const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 10px;
    width: 70%;
    max-width: 70%;
    margin: 10% auto;
    padding: 50px 50px;
`;

export const CloseButton = styled.button`
    width: 50px;
    height: 50px;

    position: absolute;
    background: url(${props => props.background});
    background-size: 100% 100%;
    border-style: hidden;
    right: 0;
    margin-right: 6%;

    transform: rotate(0);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);

    transition: all 0.2s;

    cursor: pointer;

    &:hover {
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        -o-transform: rotate(-90deg);
    }
`;