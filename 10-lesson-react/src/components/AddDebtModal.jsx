import PropTypes from "prop-types";
import { useState } from "react";

const AddDebtModal = ({ addDebt }) => {
  const [debt, setDebt] = useState({
    amount: 0,
    userName: "",
    description: "",
    date: "",
    type: "My",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    debt[name] = value;
    setDebt({ ...debt });
  };

  const add = () => {
    addDebt(debt);
    setDebt({
      amount: 0,
      userName: "",
      description: "",
      date: "",
      type: "My",
    });
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Debt
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="label-form"
                >
                  UserName
                </label>
                <input
                  name="userName"
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John Doe"
                  value={debt.userName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="label-form"
                >
                  Amount
                </label>
                <input
                  name="amount"
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="number"
                  value={debt.amount}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="label-form"
                >
                  Date
                </label>
                <input
                  name="date"
                  type="date"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John Doe"
                  value={debt.date}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="label-form"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="exampleFormControlInput1"
                  cols="30"
                  rows="3"
                  value={debt.description}
                  onChange={handleChange}
                  className="form-control"
                ></textarea>
              </div>
              <select
                name="type"
                className="form-control"
                aria-label="Default select example"
                value={debt.type}
                defaultChecked={debt.type}
                onChange={handleChange}
              >
                <option value="My">My Debts</option>
                <option value="Their">Their Debts</option>
              </select>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={add}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
AddDebtModal.propTypes = {
  addDebt: PropTypes.func,
};

export default AddDebtModal;
