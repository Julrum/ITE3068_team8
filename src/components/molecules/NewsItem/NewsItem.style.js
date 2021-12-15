import styled, { css } from 'styled-components';
import MicroLink from '@microlink/react';

export const StyledSkeleton = styled.div`
  display: flex;
`;

export const StyledNewsItem = styled.div`
  max-height: 340px;
  width: 320px;
  min-width: 320px;
  max-height: 285px;
  flex-direction: column;
  margin: 10px;
  display: flex;
  cursor: pointer;
  ${(props) =>
    !props.large &&
    css`
      width: 100%;
      height: 130px;
      flex-direction: row;
    `}
`;

export const StyledImg = styled.img`
  width: 160px;
  object-fit: cover;
  ${(props) =>
    props.large &&
    css`
      width: 320px;
      height: 160px;
    `}
`;

export const StyledTitle = styled.div`
  font-weight: bold;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 40px;
`;

export const StyledDescription = styled.div`
  font-size: 12px;
  min-height: 50px;
  max-height: 66px;
  min-width: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow-wrap: break-word;
  flex: 1;
  text-align: left;
`;

export const StyledFooter = styled.div`
  transform: translateY(calc(100%-24px));
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
`;

export const StyledPublisher = styled.div`
  display: flex;
`;

export const StyledPublisherIcon = styled.img`
  height: ${({ theme }) => theme.fontSizes.body};
  object-fit: cover;
`;

export const StyledPublisherUrl = styled.div`
  min-width: 20px;
  margin-left: 3px;
  color: ${({ theme }) => theme.colors.sub};
`;

export const StyledContentArea = styled.div`
  margin-left: 10px;
  width: 100%;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) =>
    props.large &&
    css`
      margin-top: 10px;
      margin-left: 0px;
    `}
`;

export const StyledTextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledMicroLink = styled(MicroLink)`
  max-width: 100%;
  border: hidden;
  margin: 10px;

  footer {
    span {
      visibility: hidden;
    }
  }

  ${(props) =>
    props.large &&
    css`
      border: hidden;
      margin-bottom: 20px;
      margin-right: 50px;
      min-width: 400px;
    `}
`;
