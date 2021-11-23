import React, { useEffect } from 'react'
import CandProfile from '../../molecules/CandProfile'
import close_button_image from '../../../assets/image/close_button.png'
import { CloseButton, ModalInner, ModalOverlay, ModalWrapper } from './CandPromiseModal.style'
import Portal from '../../../Portal'


const CandPromiseModal = ({modalVisible, datas, onClose, closable, maskClosable}) => {

    /* mask 클릭시 사라짐 */
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e);
        }
    }

    /* close 함수 */
    const close = (e) => {
        if (onClose) {
            onClose(e);
        }
    }

    /* 뒷화면 스크롤 방지 */
    useEffect(() => {
        document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
        return () => {
            const scrollY = document.body.style.top
            document.body.style.cssText= `position: ""; top:"";`
            window.scrollTo(0,parseInt(scrollY || '0') * -1)
        }
    }, [])

    return (
        <Portal elementId="modal-root">
            <ModalOverlay visible={modalVisible}>
                <ModalWrapper
                    tabIndex="-1" 
                    visible={modalVisible}
                    onClick={maskClosable ? onMaskClick : null}    /* mask 클릭시 사라짐 */
                >
                    <ModalInner tabIndex="0">
                        {closable && <CloseButton background={close_button_image} onClick={close} />}
                        {datas.subarea.map((item) => (
                            <CandProfile title={item.title} contents={item.promise} />
                        ))}
                    </ModalInner>
                </ModalWrapper>
            </ModalOverlay>
        </Portal>
    )
}

export default CandPromiseModal