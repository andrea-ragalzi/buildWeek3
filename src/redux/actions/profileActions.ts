import { Dispatch } from "redux";
import {
  ActionTypes,
  ProfileAction,
  Profile,
} from "./../../types/profileReducer";
import { AnyAction } from "@reduxjs/toolkit";
const apiKey = process.env.REACT_APP_MY_KEY;

const getProfileRequest = (): ProfileAction => ({
  type: ActionTypes.GET_PROFILE_REQUEST,
  error: null,
  loading: true,
});

const getProfileSuccess = (profile: Profile): ProfileAction => ({
  type: ActionTypes.GET_PROFILE_SUCCESS,
  payload: profile,
  error: null,
  loading: false,
});

const getProfileFailure = (error: string): ProfileAction => ({
  type: ActionTypes.GET_PROFILE_FAILURE,
  error: error,
  loading: false,
});

export const fetchProfile = (userId: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(getProfileRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const profile = await response.json();
      dispatch(getProfileSuccess(profile));
      console.log("nella fetch:", profile);
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(getProfileFailure(error.message));
      } else {
        dispatch(getProfileFailure("An unknown error occurred"));
      }
    }
  };
};
