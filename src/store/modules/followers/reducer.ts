import { Reducer } from "redux";
import { IResumeFollower } from './types';

const INITIAL_STATE: IResumeFollower[] = [{
  login: '',
  url: '',
  avatar_url: ''
}]

const followers: Reducer<IResumeFollower[]> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'addDataToFollowers': {
      return action.payload;
    }

    default: {
      return state;
    }
    
  }
}

export default followers;
