import api from '../api/api';

import { IResumeFollower } from "../store/modules/followers/types";

export const getFollowers = async (user: string) => {

  try {
    const { data } = await api.get(`/users/${user}/followers`);

    const DataFollowers: IResumeFollower[] = [];

    data.map((item: IResumeFollower) => {
      DataFollowers.push({
        login: item.login,
        url: item.url,
        avatar_url: item.avatar_url
      });
    });

    return DataFollowers;
  } catch (error) {
    console.log(error);
    return [{} as IResumeFollower];
  }
}