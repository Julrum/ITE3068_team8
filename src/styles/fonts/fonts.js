import { createGlobalStyle } from 'styled-components';
import { SeoulNamsanBe, SeoulNamsanBei, SeoulNamsanBo, SeoulNamsanBs, SeoulNamsanBt, SeoulNamsanBw, SeoulNamsanBw2, SeoulNamsanEBe, SeoulNamsanEBei, SeoulNamsanEBo, SeoulNamsanEBs, SeoulNamsanEBt, SeoulNamsanEBw, SeoulNamsanEBw2, SeoulNamsanLe, SeoulNamsanLei, SeoulNamsanLo, SeoulNamsanLs, SeoulNamsanLt, SeoulNamsanLw, SeoulNamsanLw2, SeoulNamsanMe, SeoulNamsanMei, SeoulNamsanMo, SeoulNamsanMs, SeoulNamsanMt, SeoulNamsanMw, SeoulNamsanMw2 } from './SeoulNamsan';

const FontStyles = createGlobalStyle`
	@font-face {
		font-family: SeoulNamsan;
		font-weight: 800;
		font-display: swap;
		src: url(${SeoulNamsanEBe});
		src: local('SeoulNamsan EB'), 
			local('서울남산 EB'),
			url(${SeoulNamsanEBei}) format('embedded-opentype'),
			url(${SeoulNamsanEBw2}) format('font-woff2'),
			url(${SeoulNamsanEBw}) format('font-woff'),
			url(${SeoulNamsanEBt}) format('truetype'),
			url(${SeoulNamsanEBo}) format('opentype'),
			url(${SeoulNamsanEBs}#SeoulNamsanEB) format('svg');
		}
	@font-face {
		font-family: SeoulNamsan;
		font-weight: 700;
		font-display: swap;
		src: url(${SeoulNamsanBe});
		src: local('SeoulNamsan B'), 
			local('서울남산 B'),
			url(${SeoulNamsanBei}) format('embedded-opentype'),
			url(${SeoulNamsanBw2}) format('font-woff2'),
			url(${SeoulNamsanBw}) format('font-woff'),
			url(${SeoulNamsanBt}) format('truetype'),
			url(${SeoulNamsanBo}) format('opentype'),
			url(${SeoulNamsanBs}#SeoulNamsanB) format('svg');
	}
	@font-face {
		font-family: SeoulNamsan;
		font-weight: 500;
		font-display: swap;
		src: url(${SeoulNamsanMe});
		src: local('SeoulNamsan M'), 
			local('서울남산 M'),
			url(${SeoulNamsanMei}) format('embedded-opentype'),
			url(${SeoulNamsanMw2}) format('font-woff2'),
			url(${SeoulNamsanMw}) format('font-woff'),
			url(${SeoulNamsanMt}) format('truetype'),
			url(${SeoulNamsanMo}) format('opentype'),
			url(${SeoulNamsanMs}#SeoulNamsanM) format('svg');
	}
	@font-face {
		font-family: SeoulNamsan;
		font-weight: 300;
		font-display: swap;
		src: url(${SeoulNamsanLe});
		src: local('SeoulNamsan L'), 
			local('서울남산 L'),
			url(${SeoulNamsanLei}) format('embedded-opentype'),
			url(${SeoulNamsanLw2}) format('font-woff2'),
			url(${SeoulNamsanLw}) format('font-woff'),
			url(${SeoulNamsanLt}) format('truetype'),
			url(${SeoulNamsanLo}) format('opentype'),
			url(${SeoulNamsanLs}#SeoulNamsanL) format('svg');
	}
`;

export default FontStyles;
