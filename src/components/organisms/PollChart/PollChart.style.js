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
padding: 20px 40px;
  font-size: 2em;
`;

export const StyledPollChartContainer = styled.div`
  display: flex;
  height: 80%;
  width: 80%;
  align-items: center;
  justify-content: center;
  padding: 30px 30px;
`;