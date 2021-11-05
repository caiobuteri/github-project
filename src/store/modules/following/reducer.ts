import { Reducer } from "redux";
import { IResumeFollowing } from "./types";

const INITIAL_STATE = [{
  login: '',
  url: '',
  avatar_url: '',
}]

const following: Reducer<IResumeFollowing[]> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'addDataToFollowing':
      return action.payload;

    default:
      return state;
  }
}

export default following;