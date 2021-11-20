import { StyledContent, StyledText, StyledDate } from './TimelineContent.style';

const TimelineContent = ({item, numdata}) => {

  const parlen = 96 / numdata;
  console.log(parlen);

  return (
  <StyledContent item={item} parlen={parlen}>
    <StyledDate>{item.date}</StyledDate>
    <StyledText>{item.text}</StyledText>
  </StyledContent>
  );
};

export default TimelineContent;
