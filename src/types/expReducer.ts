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

export interface Action {
  type: ActionTypes;
  payload?: any;
  error?: string;
}

// Definiamo i tipi per lo stato globale dell'applicazione
export interface ExperienceState {
  experiences: Experience[];
  selectedExperience: Experience | null;
  loading: boolean;
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
