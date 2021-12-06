import styled, {css} from 'styled-components';

export const StyledLike = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 5px;
`;

export const StyledLikeText = styled.div`
  min-width: 20px;
  color: ${({ theme }) => theme.colors.sub};
`;

export const StyledLikeButton = styled.button`
  height: 20px;
  background-color: transparent;
  border: 0px;
`;

export const StyledLikeIcon = styled.img`
  position: relative;
  top: -5%;
  height: ${({ theme }) => theme.fontSizes.body};
  object-fit: fill;
  ${(props) =>
    props.flag ? 
    css`
      background-color: ${({ theme }) => theme.colors.like};
    `
    : css` 
      background-color: ${({ theme }) => theme.colors.dislike};
    `
  }
`;