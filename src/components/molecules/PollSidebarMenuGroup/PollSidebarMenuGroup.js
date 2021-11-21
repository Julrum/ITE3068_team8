import React, { useState } from "react";
import {StyledPollSidebarButtonMenuMain, StyledPollSidebarButtonMenuSub, StyledPollButtonLine} from './PollSidebarMenuGroup.style';


const PollSidebarMenuGroup = ({isOpen, menuMainName, menuMainNum, menuSubList, handleSelected, getSelected}) => {
    //let {isOpen, menuMainName, menuMainNum, menuSubList, handleSelected} = prop
    //let {menuMainName} = prop;
    //console.log('hipa: '+menuMainName);
 
    const [opened, setOpened] = useState(isOpen);
    //console.log('hipa: '+menuMainNum+'/'+'isopen: '+isOpen+'opened: '+opened);

    let subMenus = () => {
        return(
            menuSubList.map((item, index) =>
            <StyledPollSidebarButtonMenuSub
                key={index}
                onClick={
                    (e) => {
                        //console.log('clickTest'+item+' / '+menuMainNum+index);
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
        <StyledPollSidebarButtonMenuMain
            onClick={
                (e) => {
                    //console.log('clickTest'+menuMainName);
                    menuMainNum === 1 ? 
                    setOpened(!opened)
                    : handleSelected(menuMainNum, 0);
                }
            }
            selected={menuMainNum === getSelected()[0] ? true : false}>
            {menuMainNum !== 1 ? menuMainName
            : opened? menuMainName+'ㅤ∨' : menuMainName+'ㅤ∧'}
        </StyledPollSidebarButtonMenuMain>
        <StyledPollButtonLine
            selected={menuMainNum === getSelected()[0] ? true : false}
            >

            </StyledPollButtonLine>
        {opened ? subMenus() : ''}
        
        </div>);
};

export default PollSidebarMenuGroup;