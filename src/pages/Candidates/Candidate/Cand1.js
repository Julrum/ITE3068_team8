import React, { useState } from "react";
import datas from './Dummy'
import CandProfileModal from "../../../components/organisms/CandProfileModal/CandProfileModal";

const Cand1 = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const openModal = () => {
    setModalVisible(true)
    }

    const closeModal = () => {
    setModalVisible(false)
    }

    return <div>Cand1
        <button onClick={openModal}>상세 정보</button> {
            modalVisible && <CandProfileModal 
                modalVisible={modalVisible}
                datas={datas}
                onClose={closeModal}
                closable={true}
                maskClosable={false}>
            </CandProfileModal>
        }
    </div>;
}

export default Cand1;