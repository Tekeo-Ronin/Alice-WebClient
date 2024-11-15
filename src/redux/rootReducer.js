import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/app";

//slices

const rootPeristConfig = {
  key: "root",
  storage,
  keyPrefix: "redux=",
  // whiteList: [],
  // blackList: [],
};

const rootReducer = combineReducers({
  app: appReducer,
});

export { rootPeristConfig, rootReducer };
