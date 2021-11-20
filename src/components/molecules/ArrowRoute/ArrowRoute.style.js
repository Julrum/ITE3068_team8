import styled from 'styled-components';
import { Link } from "react-router-dom";
import arrowimage from '../../../assets/image/arrow.png';

export const StyledArrowRoute = styled(Link)`
 width: 20vw;
 height: 80%;
 text-align: center;
 display: flex;
 flex-direction: column;
 justify-contents: start;
 background: url(${arrowimage});
 background-size: 100% 100%;
 background-repeat: no-repeat;
 margin: 0 24px;

 text-decoration: none;
 color: ${({ theme }) => theme.colors.bold};
 font-family: "SeoulNamsan";
 font-size: 60%;
`;

export const StyledNavigation = styled.h1`
 text-align: left;
 padding: 0 5%;
`
