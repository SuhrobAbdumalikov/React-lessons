import PropTypes from "prop-types";
import { useState } from "react";

const Modal = ({ addUSer }) => {
  const [dataAdd, setDataAdd] = useState({
    userName: "",
    userWebSite: "",
    userPhone: "",
  });

  const handleAdd = (e) => {
    const { name, value } = e.target;
    dataAdd[name] = value;
    setDataAdd({ ...dataAdd });
  };

  const addDataUser = () => {
    addUSer(dataAdd);
    setDataAdd({
      userName: "",
      userWebSite: "",
      userPhone: "",
    });
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="name ">
                Name
                <br />
                <input
                  value={dataAdd.userName}
                  name="userName"
                  type="text"
                  id="name"
                  placeholder="Enter Name..."
                  onChange={handleAdd}
                />
              </label>
              <br />
              <br />
              <label htmlFor="number">
                Phone
                <br />
                <input
                  value={dataAdd.userPhone}
                  name="userPhone"
                  onChange={handleAdd}
                  type="number"
                  id="number"
                  placeholder="Enter Phone..."
                />
              </label>
              <br />
              <br />
              <label htmlFor="text">
                Website
                <br />
                <input
                  value={dataAdd.userWebSite}
                  name="userWebSite"
                  onChange={handleAdd}
                  type="text"
                  id="text"
                  placeholder="Enter website..."
                />
              </label>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
                onClick={addDataUser}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  addUSer: PropTypes.func,
};

export default Modal;
