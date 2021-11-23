import React, { useState } from "react";
import CandProfileModal from "../../../components/organisms/CandProfileModal";
import CandPromiseModal from "../../../components/organisms/CandPromiseModal";
import PromiseCell from "../../../components/organisms/PromiseCell";
import PromiseCell2 from "../../../components/organisms/PromiseCell2";
import { Cell, CellList } from "./Cand.style";
import profileDatas from './DummyProfile'
import promiseDatas from './DummyPromise'


const Cand1 = () => {
    const [profileModalVisible, setProfileModalVisible] = useState(false)
    const [promiseModalVisible, setPromiseModalVisible] = useState(-1)

    const openProfileModal = () => {
        setProfileModalVisible(true);
    }

    const closeProfileModal = () => {
        setProfileModalVisible(false);
    }

    const openPromiseModal = (area) => {
        setPromiseModalVisible(area);
    }

    const closePromiseModal = () => {
        setPromiseModalVisible(-1);
    }

    return <div>Cand1
        <button onClick={openProfileModal}>상세 정보</button> 

        {promiseDatas.area.map((area, index) =>  
            (<button onClick={() => openPromiseModal(index)}>{area.title}</button>)
        )}


        <CellList>
            <Cell onClick={() => openPromiseModal(0)}>
                <PromiseCell area={promiseDatas.area[0].title} data={promiseDatas.area[0].rep_promise}></PromiseCell>
            </Cell>
            <Cell>
                <PromiseCell2 open={() => openPromiseModal(0)} data={promiseDatas.area[0].rep_promise}></PromiseCell2>
            </Cell>
            <Cell onClick={() => openPromiseModal(0)}>
                <PromiseCell area={promiseDatas.area[0].title} data={promiseDatas.area[0].rep_promise}></PromiseCell>
            </Cell>
            <Cell>
                <PromiseCell2 open={() => openPromiseModal(0)} data={promiseDatas.area[0].rep_promise}></PromiseCell2>
            </Cell>
        </CellList>

        {
            profileModalVisible && <CandProfileModal 
            modalVisible={profileModalVisible}
            datas={profileDatas}
            onClose={closeProfileModal}
            closable={true}
            maskClosable={false}>
            </CandProfileModal>
        }
        {
            promiseModalVisible>-1 && <CandPromiseModal 
                modalVisible={promiseModalVisible>-1}
                datas={promiseDatas.area[promiseModalVisible]}
                onClose={closePromiseModal}
                closable={true}
                maskClosable={false}>
            </CandPromiseModal>
        }
    </div>;
}

export default Cand1;