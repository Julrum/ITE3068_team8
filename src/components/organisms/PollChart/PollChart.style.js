import styled ,{css} from 'styled-components';

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 300px;
        margin-top: 1rem;
      }
    `}
`;

export const StyledPollChartContainer = styled.div`
  display: flex;
  height: calc(100% - 72px);
  width: calc(100% - 300px);
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryLighten};
`;

export const StyledPollChartTitleTemp = styled.div`
  font-size: 2em;
`;