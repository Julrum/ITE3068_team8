import styled from 'styled-components';

export const StyledMainSchedule = styled.div`
 width: 70%;
 height: 300px;
 margin: 8% 15%;
 text-align: center;
 display: flex;
 flex-direction: column;
 justify-content: start;
 align-items: center;
 
transform: scale(1);
-webkit-transform: scale(1);
-moz-transform: scale(1);
-ms-transform: scale(1);
-o-transform: scale(1);
`;

export const StyledTitle = styled.div`
 width: 100%;
 height: 50px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: start;
 font-size: 2em;
 font-weight: 900;
 padding-left: 1.5%;
`;

export const StyledOl = styled.ol` 
 width: 100%;
 height: 250px;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: end;
 padding: 2% 2%;
 margin: 0 0;
`
export const StyledLi = styled.li` 
 position: relative;
 display: flex;
 list-style-type: none;
 width: calc(96% / ${props => props.numdata});
 height: 3px;
 background: #666666;
 &:last-child {
	 position: relative;
	 left: 0%;
	 width: calc(96% / ${props => props.numdata} * 2);;
	 &:after {
		position: absolute;
		top: 50%;
		left: calc(50% + 1px);
		bottom: 0;
		content: '';
		width: 12px;
		height: 12px;
		transform: translateY(-50%);
		border-radius: 50%;
		background: #000000;
	 }
 }
 &:not(&:first-child) {
	 margin-left: 14px;
 }
 &:not(&:last-child) {
	 &:after {
		position: absolute;
		top: 50%;
		left: calc(100% + 1px);
		bottom: 0;
		content: '';
		width: 12px;
		height: 12px;
		transform: translateY(-50%);
		border-radius: 50%;
		background: #000000;
	 }
 }
`