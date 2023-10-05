import "./Modal.css";

const Modal = ({ isOpen, toggleModal, children }) => {
  return (
    <div className="container">
      <div className={`blur ${isOpen ? "" : "hide"}`} onClick={toggleModal} />
      <div className={`modal ${isOpen ? "" : "hide"}`}>{children}</div>
      <div className={`close ${isOpen ? "" : "hide"}`} onClick={toggleModal}>
        x
      </div>
    </div>
  );
};
export default Modal;
