import React, { useState } from "react";
import { StyledPollPageContent } from "./PollPageContent.style";
import PollSidebar from "../../organisms/PollSidebar";
import PollChart from "../../organisms/PollChart";

//dummy
let dataMain = ["다자구도", "양자구도", "지역별 지지도", "연령별 지지도"];
let data0 = ["Alpha1"];
let data1 = ["이재명 vs 윤석열", "이재명 vs 홍준표"];
let data2 = ["Gamma1"];
let data3 = ["Delta1"];
let dataTotal = [data0, data1, data2, data3];

const PollPageContent = ({chartDummyData}) => {

    const [menuMainSelected, setMenuMainSelected] = useState(0);
    const [menuSubSelected, setMenuSubSelected] = useState(0);

    const handleSelected = (main, sub) => {
        setMenuMainSelected(main);
        setMenuSubSelected(sub);
    }

    const getSelected = () => {
        return [menuMainSelected, dataMain[menuMainSelected], menuSubSelected, dataTotal[menuMainSelected][menuSubSelected]];
    }

    return(
        <StyledPollPageContent>
                <PollSidebar
                    menuMainData={dataMain}
                    menuSubData={dataTotal}
                    handleSelected={handleSelected}
                    getSelected={getSelected}
                    >
                </PollSidebar>
                <PollChart
                    getSelected={getSelected}
                    chartDummyData={chartDummyData}>
                </PollChart>
        </StyledPollPageContent>
    );
};

export default PollPageContent;