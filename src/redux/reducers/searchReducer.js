import { SET_SEARCH } from "../actions/searchActions";

const initialState = {
  value: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
