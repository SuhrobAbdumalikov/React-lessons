import { TYPES } from "../constants/actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.COLOR:
      state.color = action.payload;
      break;
    case TYPES.OPEN:
      state.isOpen = !state.isOpen;
      break;
  }

  return { ...state };
};
