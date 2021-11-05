import { IResumeFollower } from './types';

export const addDataToFollowers = (data: IResumeFollower[]) => {
  return {
    type: 'addDataToFollowers',
    payload: data
  }
}