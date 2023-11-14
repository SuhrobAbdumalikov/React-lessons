import { USER_ACTION_TYPES } from "../action-types/action-types";

const initalValue = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = initalValue, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.GET_REQUEST_USER:
      state = { ...state, loading: true };
      break;
    case USER_ACTION_TYPES.GET_FAILURE_USERS:
      state = { ...state, loading: false, users: [], error: action.payload };
      break;
    case USER_ACTION_TYPES.GET_SUCCESS_USER:
      state = { ...state, loading: false, users: action.payload, error: "" };
      break;

    default:
      break;
  }
  return { ...state };
};
