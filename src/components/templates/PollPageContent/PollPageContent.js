import React, { useState } from "react";
import { StyledPollPageContent } from "./PollPageContent.style";
import PollSidebar from "../../organisms/PollSidebar";
import PollChart from "../../organisms/PollChart";

//dummy
let dataMain = ["Alpha", "Beta", "Gamma", "Delta"];
let data0 = ["Alpha1"];
let data1 = ["Beta1", "Beta2"];
let data2 = ["Gamma1", "Gamma2", "Gamma3"];
let data3 = ["Delta1", "Delta2", "Delta3", "Delta4"];
let dataTotal = [data0, data1, data2, data3];

const PollPageContent = () => {

    const [menuMainSelected, setMenuMainSelected] = useState(0);
    const [menuSubSelected, setMenuSubSelected] = useState(0);

    //console.log(menuMainSelected+', '+menuSubSelected+', '+dataMain);

    const handleSelected = (main, sub) => {
        setMenuMainSelected(main);
        setMenuSubSelected(sub);
        //console.log(main+'//'+sub);
    }

    const getSelected = () => {
        return [menuMainSelected, dataMain[menuMainSelected], menuSubSelected, dataTotal[menuMainSelected][menuSubSelected]];
    }

    return(
        <StyledPollPageContent>
            <div>
                <PollSidebar
                    menuMainData={dataMain}
                    menuSubData={dataTotal}
                    handleSelected={handleSelected}
                    >
                </PollSidebar>
            </div>
                <PollChart
                    getSelected={getSelected}>
                </PollChart>
        </StyledPollPageContent>
    );
};

export default PollPageContent;