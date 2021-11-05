import { createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import { composeWithDevTools } from "redux-devtools-extension";

import { IHome } from "./modules/home/types";
import { IRepos } from './modules/repos/types';
import { IResumeFollower } from "./modules/followers/types";

import rootReducer from "./modules/rootReducer";
import { IResumeFollowing } from "./modules/following/types";

export interface IState {
  home: IHome;
  repos: IRepos[];
  followers: IResumeFollower[];
  following: IResumeFollowing[];
}

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools()
)

export const persistor = persistStore(store);
