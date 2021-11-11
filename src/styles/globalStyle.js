import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
 	${normalize}
 	html,
 	body {
 		height: 100%;
 		padding: 0px;
 		margin: 0px;
 		box-sizing: border-box;
 		overflow: hidden;
 		background: ${({ theme }) => theme.colors.background};
 		color: ${({ theme }) => theme.colors.main};
 		font-size: ${({ theme }) => theme.fontSizes.body};
 		-webkit-font-smoothing: antialiased;
   	-moz-osx-font-smoothing: grayscale;
 	}
 	#root {
 		height: 100%;
 	}
 	* {
 		box-sizing: border-box;
 	}
 `;

export default GlobalStyle;
