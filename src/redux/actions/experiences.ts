import { Dispatch } from "redux";
import { ActionTypes, Action } from "./../../types/expReducer";
import { Experience } from "./../../types/expCardTypes";
import { store } from "./../store/store"
import { AnyAction } from "@reduxjs/toolkit";

// definizione delle azioni
const getExperiencesRequest = (): Action => ({
  type: ActionTypes.GET_EXPERIENCES_REQUEST,
  loading: true,
  error: null
});

const getExperiencesSuccess = (experiences: Experience[]): Action => ({
  type: ActionTypes.GET_EXPERIENCES_SUCCESS,
  payload: experiences,
  loading: false,
  error: null
});

const getExperiencesFailure = (error: string): Action => ({
  type: ActionTypes.GET_EXPERIENCES_FAILURE,
  loading: false,
  error: error
});

export const fetchExperiences = (userId: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(getExperiencesRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const experiences = await response.json();
      dispatch(getExperiencesSuccess(experiences));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(getExperiencesFailure(error.message));
      } else {
        dispatch(getExperiencesFailure("An unknown error occurred"));
      }
    }
  };
};

// AGGIUNGERE ESPERIENZA

const addExperienceRequest = (): Action => ({
  type: ActionTypes.ADD_EXPERIENCE_REQUEST,
  loading: true,
  error: null
});

const addExperienceSuccess = (experience: Experience): Action => ({
  type: ActionTypes.ADD_EXPERIENCE_SUCCESS,
  payload: experience,
  loading: false,
  error: null
});

const addExperienceFailure = (error: string): Action => ({
  type: ActionTypes.ADD_EXPERIENCE_FAILURE,
  error: error,
  loading: false
});

export const addExperience = (userId: string, experience: Experience) => {
  return async (dispatch: Dispatch) => {
    store.dispatch(addExperienceRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(experience),
        }
      );
      const data = await response.json();

      if (response.ok) {
        store.dispatch(addExperienceSuccess(data));
      } else {
        store.dispatch(addExperienceFailure(data.error));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        store.dispatch(getExperiencesFailure(error.message));
      } else {
        store.dispatch(getExperiencesFailure("An unknown error occurred"));
      }
    }
  };
};

// OTTENERE ESPERIENZA SINGOLA

const getExperienceRequest = (): Action => ({
  type: ActionTypes.GET_EXPERIENCE_REQUEST,
  loading: true,
  error: null
});

const getExperienceSuccess = (experience: Experience): Action => ({
  type: ActionTypes.GET_EXPERIENCE_SUCCESS,
  payload: experience,
  loading: false,
  error: null
});

const getExperienceFailure = (error: string): Action => ({
  type: ActionTypes.GET_EXPERIENCE_FAILURE,
  loading: false,
  error: error,
});

export const fetchExperience = (userId: string, experienceId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    store.dispatch(getExperienceRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const experience = await response.json();
      store.dispatch(getExperienceSuccess(experience));
    } catch (error: unknown) {
      if (error instanceof Error) {
        store.dispatch(getExperiencesFailure(error.message));
      } else {
        store.dispatch(getExperiencesFailure("An unknown error occurred"));
      }
    }
  };
};

// MODIFICA ESPERIENZA SINGOLA

const editExperienceRequest = (): Action => ({
  type: ActionTypes.EDIT_EXPERIENCE_REQUEST,
  loading: true,
  error: null
});

const editExperienceSuccess = (experience: Experience): Action => ({
  type: ActionTypes.EDIT_EXPERIENCE_SUCCESS,
  payload: experience,
  loading: false,
  error: null
});

const editExperienceFailure = (error: string): Action => ({
  type: ActionTypes.EDIT_EXPERIENCE_FAILURE,
  loading: false,
  error: error,
});

export const editExperience =
  (userId: string, experience: Experience) =>
  async (dispatch: Dispatch<Action>) => {
    store.dispatch(editExperienceRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experience._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(experience),
        }
      );

      if (response.ok) {
        const updatedExperience = await response.json();
        store.dispatch(editExperienceSuccess(updatedExperience));
      } else {
        const data = await response.json();
        store.dispatch(editExperienceFailure(data.error));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        store.dispatch(editExperienceFailure(error.message));
      } else {
        store.dispatch(editExperienceFailure("An unknown error occurred"));
      }
    }
  };

const deleteExperienceRequest = (): Action => ({
  type: ActionTypes.DELETE_EXPERIENCE_REQUEST,
  loading: true,
  error: null
});

const deleteExperienceSuccess = (id: string): Action => ({
  type: ActionTypes.DELETE_EXPERIENCE_SUCCESS,
  payload: id,
  loading: false,
  error: null
});

const deleteExperienceFailure = (error: string): Action => ({
  type: ActionTypes.DELETE_EXPERIENCE_FAILURE,
  loading: false,
  error: error
});

export const deleteExperience = (userId: string, experienceId: string) => {
  return async (dispatch: Dispatch) => {
    store.dispatch(deleteExperienceRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        store.dispatch(deleteExperienceSuccess(experienceId));
      } else {
        const data = await response.json();
        store.dispatch(deleteExperienceFailure(data.error));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        store.dispatch(getExperienceFailure(error.message));
      } else {
        store.dispatch(getExperienceFailure("An unknown error occurred"));
      }
    }
  };
};
