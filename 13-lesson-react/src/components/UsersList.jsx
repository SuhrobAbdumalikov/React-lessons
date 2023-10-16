import PropTypes from "prop-types";

const UsersList = ({
  userName,
  userPhone,
  userWebSite,
  id,
  deleteUser,
  editUser,
}) => {
  return (
    <div className="userBox">
      <div className="leftTexts">
        <h3>
          {id}.{userName}
        </h3>
        <p>{userPhone}</p>
        <a href="#0">{userWebSite}</a>
      </div>
      <div className="rightBtns">
        <button className="btn btn-danger" onClick={() => deleteUser(id)}>
          Delete
        </button>
        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalEdit"
          onClick={() =>
            editUser({
              userName,
              userPhone,
              userWebSite,
              id,
            })
          }
        >
          Edit
        </button>
      </div>
    </div>
  );
};

UsersList.propTypes = {
  userName: PropTypes.string,
  userPhone: PropTypes.any,
  userWebSite: PropTypes.any,
  id: PropTypes.number,
  deleteUser: PropTypes.func,
  editUser: PropTypes.func,
};

export default UsersList;
