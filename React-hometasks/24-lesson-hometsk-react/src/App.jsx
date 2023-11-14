/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "./redux/actions/user-actions";
import { useEffect } from "react";

const mapState = (state) => {
  return {
    userLists: state.users,
    userLoading: state.loading,
    userError: state.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

function App({ userLoading, userError, userLists, getUsers }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      {userLoading ? (
        <h1>Loading...</h1>
      ) : userError ? (
        <h1>Something Went Wrong!</h1>
      ) : userLists ? (
        <div>
          <h1>User List</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {userLists.map((user) => {
              return (
                <div
                  key={user.id}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div style={{ display: "flex" }}>
                    <span style={{ color: "yellow" }}>{`< ${user.id} >`}</span>
                    <h3>{user.name}</h3>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a href={user.email}>Email: {user.email}</a>
                    <a href={`tel:${user.phone}`}>Phone Number: {user.phone}</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default connect(mapState, mapDispatch)(App);

App.propTypes = {
  userError: PropTypes.string,
  userLoading: PropTypes.bool,
  userLists: PropTypes.array,
  getUsers: PropTypes.func,
};
