import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import arrayReducer from "./arrayReducer";

const mainReducer = combineReducers({
  search: searchReducer,
  album: arrayReducer,
});

export default mainReducer;
