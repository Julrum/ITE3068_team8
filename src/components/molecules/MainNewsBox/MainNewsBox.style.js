import styled from 'styled-components';

export const StyledNewsBox = styled.button`
 width: 400px;
 height: 240px;
 text-align: center;
 display: flex;
 flex-direction: row;
 justify-content: start;
 background: url(${props => props.background});
 background-size: 100% 100%;
 background-repeat: no-repeat;
 padding: 0px;
`;

export const StyledHeadLine = styled.div`
 position: relative;
 top: 80%;
 width: 80%;
 height: 20%;
 color: white;
 text-align: center;
 display: flex;
 flex-direction: column;
 justify-content: center;
 background: black;
 opacity: 0.7;
`;

export const StyledLogo = styled.img.attrs(({logo}) => ({
	src: logo
}))`
 position: relative;
 top: 80%;
 width: 20%;
 height: 20%;
 background: white;
 padding: 6px;
`;
