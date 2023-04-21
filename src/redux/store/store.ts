import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import experienceReducer from "./../reducers/experienceReducer";
import profileReducer from "../reducers/profileReducer";
import feedReducer from "../reducers/feedReducer";
import imageReducer from "../reducers/imageReducer";

const allReducers = combineReducers({
  experience: experienceReducer,
  profile: profileReducer,
  feed: feedReducer,
  image: imageReducer
});

export const store = configureStore({
  reducer: allReducers,
});

export type RootState = ReturnType<typeof store.getState>;
