import styled from 'styled-components';

export const StyledPollChartLayout = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: calc(100% - 72px);
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0px 0px 30px 0px;
`;

export const StyledPollChartTitleTemp = styled.div`
  padding: 50px 0px 20px 70px;
  font-size: 2em;
  font-weight: 600;
`;

export const StyledPollChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70%;
  width: 100%;
  min-height: 500px;
  min-width: 500px;
  padding: 10px 12.5% 10px 10%;
`;

export const StyledPollChartDetailedInfo = styled.div`
  padding: 5px 0px 5px 0px;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.placeholder};
`;

export const StyledPollChartDetailedInfoContainer = styled.div`
  width: 100%;
  padding: 10px 0px 20px 90px;
`;