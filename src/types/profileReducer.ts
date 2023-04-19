export enum ActionTypes {
  GET_PROFILE_REQUEST = "GET_PROFILE_REQUEST",
  GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS",
  GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE",
  GET_PROFILES_REQUEST = "GET_PROFILES_REQUEST",
  GET_PROFILES_SUCCESS = "GET_PROFILES_SUCCESS",
  GET_PROFILES_FAILURE = "GET_PROFILES_FAILURE",
  EDIT_PROFILE_REQUEST = "PUT_PROFILE",
  EDIT_PROFILE_SUCCESS = "PUT_PROFILE_SUCCESS",
  EDIT_PROFILE_FAILURE = "PUT_PROFILE_FAILURE"
}

export interface Profile {
  _id: string;
  name: string;
  surname: string;
  email: string;
  bio: string;
  title: string;
  area: string;
  image: string;
  username: string;
}

export interface ProfileAction {
  type: ActionTypes;
  payload?: any;
  error: string | null;
  loading: boolean;
}

// Definiamo i tipi per lo stato globale dell'applicazione
export interface ProfileState {
  profile: Profile | null;
  error: string | null;
  loading: boolean;
}