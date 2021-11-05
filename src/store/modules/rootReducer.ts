import { combineReducers } from "redux";

import home from "./home/reducer";
import repos from "./repos/reducer";
import followers from './followers/reducer';
import following from './following/reducer';

export default combineReducers({
  home,
  repos,
  followers,
  following
});