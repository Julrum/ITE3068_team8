import React from 'react'
import IndivCandPage from '../../../components/templates/IndivCandPage';
import { CandPage } from './Candidate.style';
import profileDatas from './DummyProfile'
import promiseDatas from './DummyPromise'

const Candidate = ({num}) => {
    return <CandPage>
        <IndivCandPage num={num--} profileDatas={profileDatas.cand[num]} promiseDatas={promiseDatas.cand[num]}></IndivCandPage>
    </CandPage>
}

export default Candidate;