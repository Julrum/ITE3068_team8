import React, { useEffect } from 'react';
import CandCell from '../../components/organisms/CandCell';
import profileDatas from '../../assets/dummy_data/DummyProfile';
import { Cand, CandList } from './Candidates.style';

const Candidates = () => {
  useEffect(() => {
    document.title = 'Daesun | 후보정보';
  });
  return (
    <CandList>
      {profileDatas.cand.map((item, index) => (
        <Cand key={index}>
          <CandCell
            url={'/candidates/cand' + ++index}
            image={require(`../../assets/image/${item.image}.jpeg`).default}
            color={item.color}
            name={item.name}
            num={index}
            slogan={item.slogan}
          />
        </Cand>
      ))}
    </CandList>
  );
};

export default Candidates;
