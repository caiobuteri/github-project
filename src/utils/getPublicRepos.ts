import { useDispatch } from "react-redux";

import { addDataToRepos } from '../store/modules/repos/action';

import api from '../api/api';

import { IRepos } from "../store/modules/repos/types";

export const getPublicRepos = async (user: string) => {
  
  try {
    const { data } = await api.get(`/users/${user}/repos`);
    
    const DataRepos: IRepos[] = [];

    data.map((item: IRepos) => {
      DataRepos.push({
        id: item.id,
        name: item.name,
        description: item.description,
        stargazers_count: item.stargazers_count
      });
    });

    return DataRepos;
  } catch (error) {
    console.log(error);
    return [{} as IRepos];
  }
}
