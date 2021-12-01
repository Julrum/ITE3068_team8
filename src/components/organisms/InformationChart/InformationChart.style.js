import styled from 'styled-components';

export const StyledInfoChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 85%;
  min-height: 480px;
  min-width: 480px;
  margin-bottom: 200px;
  margin-top: 120px;
`;

export const ChartTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;

    padding-left: 2%;
    margin-top: 1em;
    margin-bottom: 3em;
`;

export const ChartTitle = styled.h1`
    width: max-content;
    font-size: 2.5em;
`;