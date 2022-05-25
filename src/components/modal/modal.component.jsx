import "./modal.styles.jsx";
import { ModalContainer, ModalContent } from "./modal.styles.jsx";

const Modal = ({children,  show ,onClose}) => {
  if (!show) {
    return null;
  } else {
    return (
      <ModalContainer onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </ModalContainer>
    );
  }
};

export default Modal;
