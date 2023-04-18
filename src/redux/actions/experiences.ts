import { Dispatch } from "redux";
import { ActionTypes, Experience, Action } from "./types";

// definizione delle azioni
export const getExperiencesRequest = (): Action => ({
  type: ActionTypes.GET_EXPERIENCES_REQUEST,
});

export const getExperiencesSuccess = (experiences: Experience[]): Action => ({
  type: ActionTypes.GET_EXPERIENCES_SUCCESS,
  payload: experiences,
});

export const getExperiencesFailure = (error: string): Action => ({
  type: ActionTypes.GET_EXPERIENCES_FAILURE,
  error: error,
});

export const addExperienceRequest = (): Action => ({
  type: ActionTypes.ADD_EXPERIENCE_REQUEST,
});

export const addExperienceSuccess = (experience: Experience): Action => ({
  type: ActionTypes.ADD_EXPERIENCE_SUCCESS,
  payload: experience,
});

export const addExperienceFailure = (error: string): Action => ({
  type: ActionTypes.ADD_EXPERIENCE_FAILURE,
  error: error,
});

export const getExperienceRequest = (): Action => ({
  type: ActionTypes.GET_EXPERIENCE_REQUEST,
});

export const getExperienceSuccess = (experience: Experience): Action => ({
  type: ActionTypes.GET_EXPERIENCE_SUCCESS,
  payload: experience,
});

export const getExperienceFailure = (error: string): Action => ({
  type: ActionTypes.GET_EXPERIENCE_FAILURE,
  error: error,
});

export const editExperienceRequest = (): Action => ({
  type: ActionTypes.EDIT_EXPERIENCE_REQUEST,
});

export const editExperienceSuccess = (experience: Experience): Action => ({
  type: ActionTypes.EDIT_EXPERIENCE_SUCCESS,
  payload: experience,
});

export const editExperienceFailure = (error: string): Action => ({
  type: ActionTypes.EDIT_EXPERIENCE_FAILURE,
  error: error,
});

export const deleteExperienceRequest = (): Action => ({
  type: ActionTypes.DELETE_EXPERIENCE_REQUEST,
});

export const deleteExperienceSuccess = (id: string): Action => ({
  type: ActionTypes.DELETE_EXPERIENCE_SUCCESS,
  payload: id,
});

export const deleteExperienceFailure = (error: string): Action => ({
  type: ActionTypes.DELETE_EXPERIENCE_FAILURE,
  error: error,
});

// definizione dei creatori di azioni asincrone
export const fetchExperiences = (userId: string) => {
  return async (dispatch: Dispatch<Action>) => {
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
    } catch (error) {
      dispatch(getExperiencesFailure(error.message));
    }
  };
};

export const fetchExperience = (userId: string, experienceId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(getExperienceRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const experience = await response.json();
      dispatch(getExperienceSuccess(experience));
    } catch (error) {
      dispatch(getExperienceFailure(error.message));
    }
  };
};
