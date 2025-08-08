import { ADD_ARRAY } from "../actions/fetchAction";

const initialState = {
  arrayAlbum: [],
};

const arrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARRAY:
      return { ...state, arrayAlbum: action.payload };
    default:
      return state;
  }
};

export default arrayReducer;
