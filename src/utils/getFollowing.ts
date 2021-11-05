import api from '../api/api';

import { IResumeFollowing } from "../store/modules/following/types";

export const getFollowing = async (user: string) => {

  try {
    const { data } = await api.get(`/users/${user}/following`);

    const DataFollowing: IResumeFollowing[] = [];

    data.map((item: IResumeFollowing) => {
      DataFollowing.push({
        login: item.login,
        url: item.url,
        avatar_url: item.avatar_url
      });
    });

    return DataFollowing;
  } catch (error) {
    console.log(error);
    return [{} as IResumeFollowing];
  }
}