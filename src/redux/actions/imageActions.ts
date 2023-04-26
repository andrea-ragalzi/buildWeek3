import { Dispatch } from "redux";
import { ActionTypes, ImageAction } from "../../types/imageTypes";
import { AnyAction } from "@reduxjs/toolkit";
import { Form } from "react-router-dom";

const apiKey = process.env.REACT_APP_MY_KEY;

const addImageProfileRequest = (): ImageAction => ({
  type: ActionTypes.ADD_IMAGE_PROFILE_REQUEST,
  loading: true,
  error: null,
});

const addImageProfileSuccess = (): ImageAction => ({
  type: ActionTypes.ADD_IMAGE_PROFILE_SUCCESS,
  loading: false,
  error: null,
});

const addImageProfileFailure = (error: string): ImageAction => ({
  type: ActionTypes.ADD_IMAGE_PROFILE_SUCCESS,
  loading: false,
  error: error,
});

const addImageExperienceRequest = (): ImageAction => ({
  type: ActionTypes.ADD_IMAGE_EXPERIENCE_REQUEST,
  loading: true,
  error: null,
});

const addImageExperienceSuccess = (): ImageAction => ({
  type: ActionTypes.ADD_IMAGE_EXPERIENCE_SUCCESS,
  loading: false,
  error: null,
});

const addImageExperienceFailure = (error: string): ImageAction => ({
  type: ActionTypes.ADD_IMAGE_EXPERIENCE_FAILURE,
  loading: false,
  error: error,
});

const addImagePostRequest = (): ImageAction => ({
  type: ActionTypes.ADD_IMAGE_POST_REQUEST,
  loading: true,
  error: null,
});

const addImagePostSuccess = (): ImageAction => ({
  type: ActionTypes.ADD_IMAGE_POST_SUCCESS,
  loading: false,
  error: null,
});

const addImagePostFailure = (error: string): ImageAction => ({
  type: ActionTypes.ADD_IMAGE_POST_SUCCESS,
  loading: false,
  error: error,
});

export const addImageProfile = (userId: string, image: File) => {
   const formData = new FormData()
   formData.append("image", image)
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(addImageProfileRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      dispatch(addImageProfileSuccess());
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(addImageProfileFailure(error.message));
      } else {
        dispatch(addImageProfileFailure("An unknown error occurred"));
      }
    }
  };
};

export const addImageExperience = (
  userId: string,
  expId: string,
  image: FormData
) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(addImageExperienceRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`,
        {
          method: "POST",
          body: image,
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      dispatch(addImageExperienceSuccess());
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(addImageExperienceFailure(error.message));
      } else {
        dispatch(addImageExperienceFailure("An unknown error occurred"));
      }
    }
  };
};

export const addImagePost = (postId: string, image: FormData) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(addImagePostRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "POST",
          body: image,
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      dispatch(addImagePostSuccess());
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(addImagePostFailure(error.message));
      } else {
        dispatch(addImagePostFailure("An unknown error occurred"));
      }
    }
  };
};
