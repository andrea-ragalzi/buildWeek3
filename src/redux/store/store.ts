import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import experienceReducer from "./../reducers/experienceReducer";
import profileReducer from "../reducers/profileReducer";


const allReducers = combineReducers({
  experience: experienceReducer,
  profile: profileReducer
});

export const store = configureStore({
  reducer: allReducers,
});

export type RootState = ReturnType<typeof store.getState>;
