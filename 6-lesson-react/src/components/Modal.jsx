import "../styles/modal.css";

const Modal = ({ isOpen, toggleModal, children }) => {
  return (
    <div className="container">
      <div className={`blur ${isOpen ? "" : "hide"}`} onClick={toggleModal} />
      <div className={`modal ${isOpen ? "" : "hide"}`}>{children}</div>
      <div className={`close ${isOpen ? "" : "hide"}`} onClick={toggleModal}>
        x
      </div>
      <button id="btnOpen" onClick={toggleModal}>
        Open
      </button>
    </div>
  );
};
export default Modal;
