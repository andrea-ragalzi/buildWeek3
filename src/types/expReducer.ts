// Definiamo i tipi delle azioni
export enum ActionTypes {
  GET_EXPERIENCES_REQUEST = "GET_EXPERIENCES_REQUEST",
  GET_EXPERIENCES_SUCCESS = "GET_EXPERIENCES_SUCCESS",
  GET_EXPERIENCES_FAILURE = "GET_EXPERIENCES_FAILURE",
  ADD_EXPERIENCE_REQUEST = "ADD_EXPERIENCE_REQUEST",
  ADD_EXPERIENCE_SUCCESS = "ADD_EXPERIENCE_SUCCESS",
  ADD_EXPERIENCE_FAILURE = "ADD_EXPERIENCE_FAILURE",
  GET_EXPERIENCE_REQUEST = "GET_EXPERIENCE_REQUEST",
  GET_EXPERIENCE_SUCCESS = "GET_EXPERIENCE_SUCCESS",
  GET_EXPERIENCE_FAILURE = "GET_EXPERIENCE_FAILURE",
  EDIT_EXPERIENCE_REQUEST = "EDIT_EXPERIENCE_REQUEST",
  EDIT_EXPERIENCE_SUCCESS = "EDIT_EXPERIENCE_SUCCESS",
  EDIT_EXPERIENCE_FAILURE = "EDIT_EXPERIENCE_FAILURE",
  DELETE_EXPERIENCE_REQUEST = "DELETE_EXPERIENCE_REQUEST",
  DELETE_EXPERIENCE_SUCCESS = "DELETE_EXPERIENCE_SUCCESS",
  DELETE_EXPERIENCE_FAILURE = "DELETE_EXPERIENCE_FAILURE",
}

// Definiamo i tipi per lo stato globale dell'applicazione
export interface AppState {
  experiences: Experience[];
  isLoading: boolean;
  error: string | null;
}

// Definiamo i tipi per l'esperienza
export interface Experience {
  _id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  area: string;
  username: string;
  image: string;
}

// definizione delle interfacce delle azioni

export interface ExperienceState {
  experiences: Experience[];
  selectedExperience: Experience | null;
  loading: boolean;
  error: string | null;
}

export interface GetExperiencesRequestAction {
  type: ActionTypes.GET_EXPERIENCES_REQUEST;
}

export interface GetExperiencesSuccessAction {
  type: ActionTypes.GET_EXPERIENCES_SUCCESS;
  payload: Experience[];
}

export interface GetExperiencesFailureAction {
  type: ActionTypes.GET_EXPERIENCES_FAILURE;
  error: string;
}

export interface AddExperienceRequestAction {
  type: ActionTypes.ADD_EXPERIENCE_REQUEST;
}

export interface AddExperienceSuccessAction {
  type: ActionTypes.ADD_EXPERIENCE_SUCCESS;
  payload: Experience;
}

export interface AddExperienceFailureAction {
  type: ActionTypes.ADD_EXPERIENCE_FAILURE;
  error: string;
}

export interface GetExperienceRequestAction {
  type: ActionTypes.GET_EXPERIENCE_REQUEST;
}

export interface GetExperienceSuccessAction {
  type: ActionTypes.GET_EXPERIENCE_SUCCESS;
  payload: Experience;
}

export interface GetExperienceFailureAction {
  type: ActionTypes.GET_EXPERIENCE_FAILURE;
  error: string;
}

export interface EditExperienceRequestAction {
  type: ActionTypes.EDIT_EXPERIENCE_REQUEST;
}

export interface EditExperienceSuccessAction {
  type: ActionTypes.EDIT_EXPERIENCE_SUCCESS;
  payload: Experience;
}

export interface EditExperienceFailureAction {
  type: ActionTypes.EDIT_EXPERIENCE_FAILURE;
  error: string;
}

export interface DeleteExperienceRequestAction {
  type: ActionTypes.DELETE_EXPERIENCE_REQUEST;
}

export interface DeleteExperienceSuccessAction {
  type: ActionTypes.DELETE_EXPERIENCE_SUCCESS;
  payload: string;
}

export interface DeleteExperienceFailureAction {
  type: ActionTypes.DELETE_EXPERIENCE_FAILURE;
  error: string;
}

export type Action =
  | GetExperiencesRequestAction
  | GetExperiencesSuccessAction
  | GetExperiencesFailureAction
  | AddExperienceRequestAction
  | AddExperienceSuccessAction
  | AddExperienceFailureAction
  | GetExperienceRequestAction
  | GetExperienceSuccessAction
  | GetExperienceFailureAction
  | EditExperienceRequestAction
  | EditExperienceSuccessAction
  | EditExperienceFailureAction
  | DeleteExperienceRequestAction
  | DeleteExperienceSuccessAction
  | DeleteExperienceFailureAction;
