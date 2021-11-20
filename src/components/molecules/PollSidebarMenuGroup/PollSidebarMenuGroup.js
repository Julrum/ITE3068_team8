import React, { useState } from "react";
import {StyledPollSidebarMenuMain, StyledPollSidebarMenuSub} from './PollSidebarMenuGroup.style';


const PollSidebarMenuGroup = ({isOpen, menuMainName, menuMainNum, menuSubList, handleSelected}) => {
    //let {isOpen, menuMainName, menuMainNum, menuSubList, handleSelected} = prop
    //let {menuMainName} = prop;
    //console.log('hipa: '+menuMainName);
 
    const [opened, setOpened] = useState(isOpen);
    //console.log('hipa: '+menuMainNum+'/'+'isopen: '+isOpen+'opened: '+opened);

    let subMenus = () => {
        return(
            menuSubList.map((item, index) =>
            <StyledPollSidebarMenuSub
                key={index}
                onClick={
                    (e) => {
                        //console.log('clickTest'+item+' / '+menuMainNum+index);
                        handleSelected(menuMainNum, index);
                    }
                }>
                {item}
            </StyledPollSidebarMenuSub>
            )
        )
    }

    return (<div>
        <StyledPollSidebarMenuMain
            onClick={
                (e) => {
                    //console.log('clickTest'+menuMainName);
                    menuMainNum == 1 ? 
                    setOpened(!opened)
                    : handleSelected(menuMainNum, 0);
                }
            }>
            {menuMainName}
        </StyledPollSidebarMenuMain>
        {opened ? subMenus() : ''}
        </div>);
};

export default PollSidebarMenuGroup;