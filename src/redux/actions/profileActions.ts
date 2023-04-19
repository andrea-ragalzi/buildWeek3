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

const getProfilesRequest = (): ProfileAction => ({
  type: ActionTypes.GET_PROFILES_REQUEST,
  error: null,
  loading: true,
});

const getProfilesSuccess = (profile: Profile): ProfileAction => ({
  type: ActionTypes.GET_PROFILES_SUCCESS,
  payload: profile,
  error: null,
  loading: false,
});

const editProfileRequest = (): ProfileAction => ({
  type: ActionTypes.EDIT_PROFILE_REQUEST,
  error: null,
  loading: true,
});

const editProfileSuccess = (profile: Profile): ProfileAction => ({
  type: ActionTypes.EDIT_PROFILE_SUCCESS,
  payload: profile,
  error: null,
  loading: false,
});

const editProfileFailure = (error: string): ProfileAction => ({
  type: ActionTypes.EDIT_PROFILE_FAILURE,
  error: error,
  loading: false,
});

const getProfilesFailure = (error: string): ProfileAction => ({
  type: ActionTypes.GET_PROFILES_FAILURE,
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

export const fetchProfiles = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(getProfilesRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/`,
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
      dispatch(getProfilesSuccess(profile));
      console.log("nella fetch:", profile);
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(getProfilesFailure(error.message));
      } else {
        dispatch(getProfilesFailure("An unknown error occurred"));
      }
    }
  };
};

export const editProfile = (userId: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(editProfileRequest());

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
      dispatch(editProfileSuccess(profile));
      console.log("nella fetch:", profile);
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(editProfileFailure(error.message));
      } else {
        dispatch(editProfileFailure("An unknown error occurred"));
      }
    }
  };
};