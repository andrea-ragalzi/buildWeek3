import { Dispatch } from "redux";
import { ActionTypes, Action } from "../../types/experienceTypes";
import { Experience } from "../../types/expCardTypes";
import { AnyAction } from "@reduxjs/toolkit";

const apiKey = process.env.REACT_APP_MY_KEY;

// definizione delle azioni
const getExperiencesRequest = (): Action => ({
  type: ActionTypes.GET_EXPERIENCES_REQUEST,
  loading: true,
  error: null,
});

const getExperiencesSuccess = (experiences: Experience[]): Action => ({
  type: ActionTypes.GET_EXPERIENCES_SUCCESS,
  payload: experiences,
  loading: false,
  error: null,
});

const getExperiencesFailure = (error: string): Action => ({
  type: ActionTypes.GET_EXPERIENCES_FAILURE,
  loading: false,
  error: error,
});

// AGGIUNGERE ESPERIENZA

const addExperienceRequest = (): Action => ({
  type: ActionTypes.ADD_EXPERIENCE_REQUEST,
  loading: true,
  error: null,
});

const addExperienceSuccess = (experience: Experience): Action => ({
  type: ActionTypes.ADD_EXPERIENCE_SUCCESS,
  payload: experience,
  loading: false,
  error: null,
});

const addExperienceFailure = (error: string): Action => ({
  type: ActionTypes.ADD_EXPERIENCE_FAILURE,
  error: error,
  loading: false,
});

// OTTENERE ESPERIENZA SINGOLA

const getExperienceRequest = (): Action => ({
  type: ActionTypes.GET_EXPERIENCE_REQUEST,
  loading: true,
  error: null,
});

const getExperienceSuccess = (experience: Experience): Action => ({
  type: ActionTypes.GET_EXPERIENCE_SUCCESS,
  payload: experience,
  loading: false,
  error: null,
});

const getExperienceFailure = (error: string): Action => ({
  type: ActionTypes.GET_EXPERIENCE_FAILURE,
  loading: false,
  error: error,
});

// MODIFICA ESPERIENZA SINGOLA

const editExperienceRequest = (): Action => ({
  type: ActionTypes.EDIT_EXPERIENCE_REQUEST,
  loading: true,
  error: null,
});

const editExperienceSuccess = (experience: Experience): Action => ({
  type: ActionTypes.EDIT_EXPERIENCE_SUCCESS,
  payload: experience,
  loading: false,
  error: null,
});

const editExperienceFailure = (error: string): Action => ({
  type: ActionTypes.EDIT_EXPERIENCE_FAILURE,
  loading: false,
  error: error,
});

const deleteExperienceRequest = (): Action => ({
  type: ActionTypes.DELETE_EXPERIENCE_REQUEST,
  loading: true,
  error: null,
});

const deleteExperienceSuccess = (id: string): Action => ({
  type: ActionTypes.DELETE_EXPERIENCE_SUCCESS,
  payload: id,
  loading: false,
  error: null,
});

const deleteExperienceFailure = (error: string): Action => ({
  type: ActionTypes.DELETE_EXPERIENCE_FAILURE,
  loading: false,
  error: error,
});

export const fetchExperiences = (userId: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(getExperiencesRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const experiences = await response.json();
      dispatch(getExperiencesSuccess(experiences));
      console.log("nella fetch exp:", experiences);
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(getExperiencesFailure(error.message));
      } else {
        dispatch(getExperiencesFailure("An unknown error occurred"));
      }
    }
  };
};

export const addExperience = (userId: string, experience: Experience) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(addExperienceRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(experience),
        }
      );
      const data = await response.json();
      console.log('addExperience', data);
      if (response.ok) {
        dispatch(addExperienceSuccess(data));
      } else {
        dispatch(addExperienceFailure(data.error));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(addExperienceFailure(error.message));
      } else {
        dispatch(addExperienceFailure("An unknown error occurred"));
      }
    }
  };
};

export const fetchExperience = (userId: string, experienceId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(getExperienceRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const experience = await response.json();
      dispatch(getExperienceSuccess(experience));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(getExperienceFailure(error.message));
      } else {
        dispatch(getExperienceFailure("An unknown error occurred"));
      }
    }
  };
};

export const editExperience = (userId: string, experience: Experience) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(editExperienceRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experience._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(experience),
        }
      );

      if (response.ok) {
        const updatedExperience = await response.json();
        dispatch(editExperienceSuccess(updatedExperience));
      } else {
        const data = await response.json();
        dispatch(editExperienceFailure(data.error));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(editExperienceFailure(error.message));
      } else {
        dispatch(editExperienceFailure("An unknown error occurred"));
      }
    }
  };
};

export const deleteExperience = (userId: string, experienceId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(deleteExperienceRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.ok) {
        dispatch(deleteExperienceSuccess(experienceId));
      } else {
        const data = await response.json();
        dispatch(deleteExperienceFailure(data.error));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(deleteExperienceFailure(error.message));
      } else {
        dispatch(deleteExperienceFailure("An unknown error occurred"));
      }
    }
  };
};
