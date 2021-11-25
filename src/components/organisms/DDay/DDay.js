import React, { useState, useEffect } from 'react';
import { StyledTextBox, StyledDDay, StyledTiny } from './DDay.style';
import theme from '../../../styles/theme';

const election_day = new Date("2022-03-09T00:00:00.000Z");

const DdayColor = (Dday) => {
  if (Dday > 7)  return theme.colors.bold;
  else if (Dday > 1) return theme.colors.warning;
  else return theme.colors.danger;
}

const DDay = () => {
  const [Dday, setDday] = useState(0);

  useEffect(() => {
    let today = new Date();
    let diff = Math.ceil((election_day - today) / (1000 * 86400));

    if(Dday !== diff) {
      setDday(diff);
    } 
  }, [Dday])

  return (
    <StyledTextBox>
        <StyledTiny>대선까지</StyledTiny>
        <StyledDDay style={{ color: DdayColor(Dday) }}>D-{Dday}</StyledDDay>
    </StyledTextBox>
  );
};

export default DDay;
