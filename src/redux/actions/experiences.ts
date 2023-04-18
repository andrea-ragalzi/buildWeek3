import { Dispatch } from "redux";
import { ActionTypes, Action } from "./../../types/expReducer";
import { Experience } from "./../../types/expCardTypes";
import { useAppDispatch } from "../store/hooks";

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
  return async (dispatch: Dispatch<Action>) => {
    useAppDispatch(getExperiencesRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const experiences = await response.json();
      useAppDispatch(getExperiencesSuccess(experiences));
    } catch (error: unknown) {
      if (error instanceof Error) {
        useAppDispatch(getExperiencesFailure(error.message));
      } else {
        useAppDispatch(getExperiencesFailure("An unknown error occurred"));
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
    useAppDispatch(addExperienceRequest());

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
        useAppDispatch(addExperienceSuccess(data));
      } else {
        useAppDispatch(addExperienceFailure(data.error));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        useAppDispatch(getExperiencesFailure(error.message));
      } else {
        useAppDispatch(getExperiencesFailure("An unknown error occurred"));
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
    useAppDispatch(getExperienceRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const experience = await response.json();
      useAppDispatch(getExperienceSuccess(experience));
    } catch (error: unknown) {
      if (error instanceof Error) {
        useAppDispatch(getExperiencesFailure(error.message));
      } else {
        useAppDispatch(getExperiencesFailure("An unknown error occurred"));
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
    useAppDispatch(editExperienceRequest());

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
        useAppDispatch(editExperienceSuccess(updatedExperience));
      } else {
        const data = await response.json();
        useAppDispatch(editExperienceFailure(data.error));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        useAppDispatch(editExperienceFailure(error.message));
      } else {
        useAppDispatch(editExperienceFailure("An unknown error occurred"));
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
    useAppDispatch(deleteExperienceRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        useAppDispatch(deleteExperienceSuccess(experienceId));
      } else {
        const data = await response.json();
        useAppDispatch(deleteExperienceFailure(data.error));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        useAppDispatch(getExperienceFailure(error.message));
      } else {
        useAppDispatch(getExperienceFailure("An unknown error occurred"));
      }
    }
  };
};
