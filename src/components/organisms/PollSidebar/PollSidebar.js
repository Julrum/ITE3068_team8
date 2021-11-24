import React from 'react';
import { StyledPollSidebarContainer } from './PollSidebar.style';
import PollSidebarMenuGroup from '../../molecules/PollSidebarMenuGroup/PollSidebarMenuGroup';

const PollSidebar = (prop) => {
    const {menuMainData, menuSubData, handleSelected, getSelected} = prop;

    return(
        <StyledPollSidebarContainer>
            {menuMainData.map((item, index) => {
                return(
                    <div
                    key={index}>
                        <PollSidebarMenuGroup
                            isOpen={false}
                            menuMainName={item}
                            menuMainNum={index}
                            menuSubList={menuSubData[index]}
                            handleSelected={handleSelected}
                            getSelected={getSelected}
                            >
                        </PollSidebarMenuGroup>
                    </div>
                )
                })
            }

        </StyledPollSidebarContainer>
    );
};

export default PollSidebar;