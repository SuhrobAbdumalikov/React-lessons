import { TYPES } from "../constants/actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.AMOUNT1:
      state.amount1 = action.payload;
      break;
    case TYPES.AMOUNT2:
      state.amount2 = action.payload;
      break;
    case TYPES.CURRENCY1:
      state.currency1 = action.payload;
      break;
    case TYPES.CURRENCY2:
      state.currency2 = action.payload;
      break;
    case TYPES.RATES:
      state.rates = action.payload;
      break;
  }
  return { ...state };
};
