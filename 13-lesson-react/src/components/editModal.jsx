import PropTypes from "prop-types";
import { useState } from "react";

const EditModal = ({ editUser }) => {
  const [dataEdit, setDataEdit] = useState({
    userName: "",
    userWebSite: "",
    userPhone: "",
  });

  const handleEdit = (e) => {
    const { name, value } = e.target;
    dataEdit[name] = value;
    setDataEdit({ ...dataEdit });
  };

  const EditDataUser = () => {
    editUser(dataEdit);
    setDataEdit({
      userName: "",
      userWebSite: "",
      userPhone: "",
    });
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalEdit"
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
                  value={dataEdit.userName}
                  name="userName"
                  type="text"
                  id="name"
                  placeholder="Enter Name..."
                  onChange={handleEdit}
                />
              </label>
              <br />
              <br />
              <label htmlFor="number">
                Phone
                <br />
                <input
                  value={dataEdit.userPhone}
                  name="userPhone"
                  onChange={handleEdit}
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
                  value={dataEdit.userWebSite}
                  name="userWebSite"
                  onChange={handleEdit}
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
                onClick={EditDataUser}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EditModal.propTypes = {
  editUser: PropTypes.func,
};

export default EditModal;
