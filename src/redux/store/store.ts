import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import experienceReducer from "./../reducers/experienceReducer";
import profileReducer from "../reducers/profileReducer";
import feedReducer from "../reducers/feedReducer";

const allReducers = combineReducers({
  experience: experienceReducer,
  profile: profileReducer,
  feed: feedReducer,
});

export const store = configureStore({
  reducer: allReducers,
});

export type RootState = ReturnType<typeof store.getState>;
