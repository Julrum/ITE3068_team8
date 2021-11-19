import React, { useState, useEffect } from 'react';
import { StyledTextBox, StyledDDay, StyledTiny } from './DDay.style';

const election_day = new Date("2022-3-09");

/* if want to change D-Day color based on D-day value
const DdayColor = (Dday) => {
  if (Dday > 1) return theme.colors.bold;
  else return theme.colors.warning;
}*/

const DDay = () => {
  const [Dday, setDday] = useState(0);

  useEffect(() => {
    let today = new Date();
    let diff = election_day - today;

    setDday(Math.ceil(diff / (1000 * 86400)));
  })

  return (
    <StyledTextBox>
        <StyledTiny>대선까지</StyledTiny>
        <StyledDDay>D-{Dday}</StyledDDay>
    </StyledTextBox>
  );
};

export default DDay;
