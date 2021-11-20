import styled from 'styled-components';

export const StyledContent = styled.div` 
 position: relative;
 top: -24px;
 transform: translateY(-100%);
 left: calc(50% * ${props => props.item.correction} + 6px);
 width: calc(100% * ${props => props.item.correction});
 height: 14vh;
 color: black;
 background: ${props => props.item.background};
 font-family: "SeoulNamsan";
 font-weight: bold;
 white-space: pre-line;
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
    font-size: 1.5vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const StyledText = styled.div` 
    height: 64%;
    font-size: 2.1vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
