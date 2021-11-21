import styled, {css} from 'styled-components';
import tempImg from '../../../assets/image/tempImg.jpg';
import main_background from '../../../assets/image/main_background.png';
import blackbar from '../../../assets/image/blackbar.png';
import blackbar_hover from '../../../assets/image/blackbar_hover.png';
import blackbar_transparent from '../../../assets/image/blackbar_transparent.png';


export const StyledPollSidebarMenuMain = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.warning};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  font-weight: bold;
  font-size: 1.5rem;
  padding: 16px 0px 16px 20px;
`;

export const StyledPollSidebarMenuSub = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.success};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  font-size: 1.1rem;
  padding: 12px 0px 12px 36px;
`;

export const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 0px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.25rem;
  font-size: 1rem;

  background: url(${main_background});
  &:hover {
    background: url(${tempImg});
  }
`;

export const StyledPollSidebarButtonMenuMain = styled.button`

  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  text-align: left;
  color: ${props => props.selected ? ({ theme }) => theme.colors.primaryMoreDarken : ''};
  background-color: ${({ theme }) => theme.colors.pollButtonBasic};
  &:hover {
    background-color: ${({ theme }) => theme.colors.pollButtonHover};
  }

  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 16px;
  padding: 20px 0px 16px 20px;
`;

export const StyledPollSidebarButtonMenuSub = styled.button`

  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  text-align: left;
  color: ${props => props.selected ? ({ theme }) => theme.colors.primaryMoreDarken : ''};
  background-color: ${({ theme }) => theme.colors.pollButtonBasic};
  &:hover {
    background-color: ${({ theme }) => theme.colors.pollButtonHover};
  }

  font-size: 1.0rem;
  font-weight: ${props => props.selected ? 'bold' : ''};
  padding: 12px 0px 16px 36px;
`;

export const StyledPollButtonLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${props => props.selected ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.primaryLighten};
`;