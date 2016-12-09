import { combineReducers } from "redux";

import tweets from "./tweetReducer.jsx";
import user from "./userReducer.jsx";

export default combineReducers({
  tweets,
  user,
})
