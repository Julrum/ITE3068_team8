import React, { useCallback } from 'react';
import {
  StyledModal,
  StyledSection,
  StyledHeader,
  StyledTitle,
  StyledComponents,
  StyledBody,
} from './Modal.style';

const Modal = ({
  title,
  width,
  open,
  headerComponent,
  closeModal,
  children,
}) => {
  const stopEventProp = useCallback((e) => e.stopPropagation(), []);

  return (
    <>
      {open ? (
        <StyledModal open={open} onClick={closeModal}>
          <StyledSection width={width} onClick={stopEventProp}>
            <StyledHeader>
              <StyledTitle>{title}</StyledTitle>
              <StyledComponents>{headerComponent}</StyledComponents>
            </StyledHeader>
            <StyledBody>{children}</StyledBody>
          </StyledSection>
        </StyledModal>
      ) : null}
    </>
  );
};

export default Modal;
