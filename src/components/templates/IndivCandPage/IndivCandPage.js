import React, { useState } from 'react';
import CandProfileModal from '../../organisms/CandProfileModal';
import CandPromiseModal from '../../organisms/CandPromiseModal';
import PromiseCell from '../../organisms/PromiseCell';
import PromiseCell2 from '../../organisms/PromiseCell2';
import CandProfile from '../../molecules/CandProfile';
import {
  CandImage,
  Cell,
  CellList,
  PageTemplate,
  Profile,
  Profiles,
  Promise,
  Title,
} from './IndivCandPage.style';

const IndivCandPage = ({ num, profileDatas, promiseDatas }) => {
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [promiseModalVisible, setPromiseModalVisible] = useState(-1);

  const openProfileModal = () => {
    setProfileModalVisible(true);
  };

  const closeProfileModal = () => {
    setProfileModalVisible(false);
  };

  const openPromiseModal = (area) => {
    setPromiseModalVisible(area);
  };

  const closePromiseModal = () => {
    setPromiseModalVisible(-1);
  };

  return (
    <PageTemplate>
      <Profiles>
        <CandImage
          background={
            require(`../../../assets/image/${profileDatas.image}.jpeg`).default
          }
        ></CandImage>

        <Profile>
          <Title>{profileDatas.name}</Title>
          {profileDatas.repProfile.map((item, index) => (
            <CandProfile
              key={index}
              title={item.title}
              contents={item.contents}
            />
          ))}
          <button onClick={openProfileModal}>상세 정보</button>
        </Profile>
      </Profiles>
      <Promise>
        <Title>대표 공약</Title>
        <CellList>
          {promiseDatas.area.map((item, index) => (
            <Cell onClick={() => openPromiseModal(index)} key={index}>
              <PromiseCell
                area={item.title}
                data={item.rep_promise}
              ></PromiseCell>
            </Cell>
          ))}
          {promiseDatas.area.map((item, index) => (
            <Cell key={index}>
              <PromiseCell2
                open={() => openPromiseModal(index)}
                area={item.title}
                data={item.rep_promise}
              ></PromiseCell2>
            </Cell>
          ))}
        </CellList>
      </Promise>

      {profileModalVisible && (
        <CandProfileModal
          modalVisible={profileModalVisible}
          datas={profileDatas}
          onClose={closeProfileModal}
          closable={true}
          maskClosable={false}
        ></CandProfileModal>
      )}
      {promiseModalVisible > -1 && (
        <CandPromiseModal
          modalVisible={promiseModalVisible > -1}
          datas={promiseDatas.area[promiseModalVisible]}
          onClose={closePromiseModal}
          closable={true}
          maskClosable={false}
        ></CandPromiseModal>
      )}
    </PageTemplate>
  );
};

export default IndivCandPage;
