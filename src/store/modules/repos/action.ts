import { IRepos } from "./types";

export function addDataToRepos(data: IRepos[]) {
  return {
    type: 'addDataToRepos',
    payload: data
  }
}