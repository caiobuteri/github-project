import { IResumeFollowing } from "./types";

export const addDataToFollowing = (data: IResumeFollowing[]) => {
  return {
    type: 'addDataToFollowing',
    payload: data
  }
}