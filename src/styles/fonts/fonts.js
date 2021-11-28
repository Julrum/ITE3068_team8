import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  @font-face {
  	font-family: 'SeoulNamsan';
  	font-weight: 800;
  	font-display: swap;
  	src: local('SeoulNamsan ExtraBold'), url('./SeoulNamsan/SeoulNamsanEB.ttf') format('truetype');
  }
  @font-face {
  	font-family: 'SeoulNamsan';
  	font-weight: 700;
  	font-display: swap;
  	src: local('SeoulNamsan Bold'), url('./SeoulNamsan/SeoulNamsanB.ttf') format('truetype');
  }
  @font-face {
  	font-family: 'SeoulNamsan';
  	font-weight: 500;
  	font-display: swap;
  	src: local('Pretendard Medium'), url('./SeoulNamsan/SeoulNamsanM.ttf') format('truetype');
  }
  @font-face {
  	font-family: 'SeoulNamsan';
  	font-weight: 300;
  	font-display: swap;
  	src: local('Pretendard Light'), url('./SeoulNamsan/SeoulNamsanL.ttf') format('truetype');
  }
  `;

export default FontStyles;
