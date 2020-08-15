import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import moviesReducer from "./movies/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["moviesReducer"],
};

const rootReducer = combineReducers({ moviesReducer });

export default persistReducer(persistConfig, rootReducer);
