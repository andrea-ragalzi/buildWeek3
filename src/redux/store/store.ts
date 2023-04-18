import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import experienceReducer from "./../reducers/experienceReducer";

const allReducers = combineReducers({
  experience: experienceReducer,
  // Qui puoi aggiungere altri reducers
});
const store = configureStore({
  reducer: allReducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
