import styled from 'styled-components';

export const StyledContent = styled.div` 
 position: relative;
 top: -24px;
 transform: translateY(-100%);
 left: calc(50% * ${props => props.item.correction} + 6px);
 width: calc(100% * ${props => props.item.correction});
 height: 120px;
 color: black;
 background: ${props => props.item.background};
 font-weight: bold;
 white-space: pre-line;
 padding: 0 3%;
 &:before {
	 content: '';
	 position: absolute;
	 top: 99%;
	 left: calc(50% - ${props => props.parlen} * 0.6px);
	 width: 0;
	 height: 0;
	 border-style: solid;
	 
     border-top: calc(${props => props.parlen} * 0.7px) solid ${props => props.item.background};
     border-bottom:calc(${props => props.parlen} * 0.7px) solid transparent;
     border-right: calc(${props => props.parlen} * 0.7px) solid transparent;
     border-left: calc(${props => props.parlen} * 0.7px) solid  transparent;
 }
`

export const StyledDate = styled.div` 
    position:relative;
    top: 12%;
    height: 36%;
    font-size: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const StyledText = styled.div` 
    width: 100%;
    height: 64%;
    font-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
