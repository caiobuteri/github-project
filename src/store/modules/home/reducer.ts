import { Reducer } from "redux";
import { IHome } from "./types";

const INITIAL_STATE: IHome = {
  avatar_url: '',
  login: '',
  name: '',
  bio: '',
  location: '',
  followers: 0,
  following: 0,
  public_repos: 0,
}

const home: Reducer<IHome> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'addDataToHome': {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}

export default home;