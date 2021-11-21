import styled from 'styled-components';

// const fullWidthStyle = css`
//   ${props =>
//     props.fullWidth &&
//     css`
//       width: 100%;
//       justify-content: center;
//       & + & {
//         margin-left: 300px;
//         margin-top: 1rem;
//       }
//     `}
// `;

export const StyledPollChartLayout = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: calc(100% - 72px);
  width: calc(100% - 300px);
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledPollChartTitleTemp = styled.div`
  padding: 50px 0px 20px 70px;
  font-size: 2em;
  font-weight: 600;
`;

export const StyledPollChartContainer = styled.div`
  display: flex;
  height: 70%;
  width: 80%;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
`;

export const StyledPollChartDetailedInfo = styled.div`
  padding: 5px 0px 5px 90px;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.placeholder};
`;