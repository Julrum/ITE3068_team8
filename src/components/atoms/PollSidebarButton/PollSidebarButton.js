import React from "react";
import {StyledPollSidebarMainButtonContainer, StyledPollSidebarMainButtonTitleContainer, 
    StyledPollSidebarMainButtonTitleText, StyledPollSidebarMainButtonArrowContainer, 
    StyledPollSidebarMainButtonArrowImage, StyledPollButtonLine} from './PollSidebarButton.style';
import arrow_down from '../../../assets/image/poll_sidebar_arrow_down.svg';

const PollSidebarButton = ({isOpen, menuMainName, menuMainNum, menuSubList, handleSelected, getSelected, opened, setOpened}) => {
    return (<div>
        <StyledPollSidebarMainButtonContainer
            onClick={
                (e) => {
                    menuMainNum === 1 ? 
                    setOpened(!opened)
                    : handleSelected(menuMainNum, 0);
                }
            }>

            <StyledPollSidebarMainButtonTitleContainer>
                <StyledPollSidebarMainButtonTitleText
                    selected={menuMainNum === getSelected()[0] ? true : false}>
                    {menuMainName}
                </StyledPollSidebarMainButtonTitleText>
            </StyledPollSidebarMainButtonTitleContainer>

            {menuMainNum === 1 ? 
            <StyledPollSidebarMainButtonArrowContainer>
                <StyledPollSidebarMainButtonArrowImage
                    src={arrow_down}
                    isOpen={opened}
                    >
                </StyledPollSidebarMainButtonArrowImage>
            </StyledPollSidebarMainButtonArrowContainer>
            : ''}
            
        </StyledPollSidebarMainButtonContainer>
        <StyledPollButtonLine
            selected={menuMainNum === getSelected()[0] ? true : false}
            >
        </StyledPollButtonLine>
        
        </div>);
}

export default PollSidebarButton;