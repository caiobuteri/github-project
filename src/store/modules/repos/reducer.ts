import { Reducer } from "redux";
import { IRepos } from "./types";

const INITIAL_STATE = [{
  id: -1,
  name: '',
  description: '',
  stargazers_count: 0
}];

const repos: Reducer<IRepos[]> = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case 'addDataToRepos': {
      console.log(action.payload)

      return action.payload;
    }

    default:
      return state;
  }
}

export default repos;