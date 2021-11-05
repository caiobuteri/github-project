import { useDispatch } from "react-redux";

import api from '../api/api';

import { IHome } from "../store/modules/home/types";

export const getPersonalData = async (user: string) => {

  try {
    const { data } = await api.get(`/users/${user}`);
    
    const DataHome: IHome = {
      avatar_url: data.avatar_url,
      login: data.login,
      name: data.name,
      bio: data.bio,
      location: data.location,
      followers: data.followers,
      following: data.following,
      public_repos: data.public_repos,
    }

    return DataHome;
  } catch (error) {
    console.log(error);
    return {} as IHome;
  }
}