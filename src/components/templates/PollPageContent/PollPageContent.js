import React from "react";
import { StyledPollPageContent } from "./PollPageContent.style";
import PollSidebar from "../../organisms/PollSidebar";

const PollPageContent = () => {
    return(
        <StyledPollPageContent>
            <PollSidebar>
            </PollSidebar>
        </StyledPollPageContent>
    );
};

export default PollPageContent;