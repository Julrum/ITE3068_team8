import React from "react";
import image from '../../assets/image/cand1.jpeg'
import CandCell from "../../components/organisms/CandCell";
import { Cand, CandList } from "./Candidates.style";

const Candidates = () => {

    return (
        <CandList>
            <Cand>
                <CandCell url="/candidates/cand1" image={image} name="이재명1" num="1" slogan="나라를 나라답게"></CandCell>
            </Cand>
            <Cand>
                <CandCell url="/candidates/cand2" image={image} name="이재명2" num="2" slogan="나라를 나라답게"></CandCell>
            </Cand>
            <Cand>
                <CandCell url="/candidates/cand3" image={image} name="이재명3" num="3" slogan="나라를 나라답게"></CandCell>
            </Cand>
            <Cand>
                <CandCell url="/candidates/cand4" image={image} name="이재명4" num="4" slogan="나라를 나라답게"></CandCell>
            </Cand>
        </CandList>
    );
}

export default Candidates;