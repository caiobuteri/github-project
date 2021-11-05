import { IHome } from "./types";

export function addDataToHome(data: IHome){

  return {
    type: 'addDataToHome',
    payload: data
  }
}