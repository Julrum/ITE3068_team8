import React, { useState } from "react";
import {StyledPollSidebarButtonMenuSub} from './PollSidebarMenuGroup.style';
import PollSidebarButton from "../../atoms/PollSidebarButton/PollSidebarButton";

const PollSidebarMenuGroup = ({isOpen, menuMainName, menuMainNum, menuSubList, handleSelected, getSelected}) => {
 
    const [opened, setOpened] = useState(isOpen);

    let subMenus = () => {
        return(
            menuSubList.map((item, index) =>
            <StyledPollSidebarButtonMenuSub
                key={index}
                onClick={
                    (e) => {
                        handleSelected(menuMainNum, index);
                    }
                }
                selected={menuMainNum === getSelected()[0] && getSelected()[2] === index ? true : false}>
                {item}
            </StyledPollSidebarButtonMenuSub>
            )
        )
    }

    return (<div>
        <PollSidebarButton
            isOpen={isOpen}
            menuMainName={menuMainName}
            menuMainNum={menuMainNum}
            menuSubList={menuSubList}
            handleSelected={handleSelected}
            getSelected={getSelected}
            opened={opened}
            setOpened={setOpened}
            >
        </PollSidebarButton>

        {opened ? subMenus() : ''}
        
        </div>);
};

export default PollSidebarMenuGroup;