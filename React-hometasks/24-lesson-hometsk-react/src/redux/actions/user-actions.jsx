import axios from "axios";
import { USER_ACTION_TYPES } from "../action-types/action-types";

const getRequestUser = () => {
  return {
    type: USER_ACTION_TYPES.GET_REQUEST_USER,
  };
};

const getSuccessUsers = (data) => {
  return {
    type: USER_ACTION_TYPES.GET_SUCCESS_USER,
    payload: data,
  };
};

const getFailureUsers = (error) => {
  return {
    type: USER_ACTION_TYPES.GET_FAILURE_USERS,
    payload: error,
  };
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getRequestUser());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(getSuccessUsers(res.data)))
      .catch((error) => dispatch(getFailureUsers(error)));
  };
};
