import "./modal.styles.css";

const Modal = ({children,  show ,onClose}) => {
  if (!show) {
    return null;
  } else {
    return (
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  }
};

export default Modal;
