export interface Post {
  _id: string; // server generated
  username: string;
  createdAt: string; // server generated
  text: string;
  image?: string;
}

// Definiamo i tipi delle azioni
export enum ActionTypes {
  ADD_POST_REQUEST = "ADD_POST_REQUEST",
  ADD_POST_SUCCESS = "ADD_POST_SUCCESS",
  ADD_POST_FAILURE = "ADD_POST_FAILURE",
  GET_POST_REQUEST = "GET_POST_REQUEST",
  GET_POST_SUCCESS = "GET_POST_SUCCESS",
  GET_POST_FAILURE = "GET_POST_FAILURE",
  EDIT_POST_REQUEST = "EDIT_POST_REQUEST",
  EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS",
  EDIT_POST_FAILURE = "EDIT_POST_FAILURE",
  DELETE_POST_REQUEST = "DELETE_POST_REQUEST",
  DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS",
  DELETE_POST_FAILURE = "DELETE_POST_FAILURE",
  GET_POSTS_REQUEST = "GET_POSTS_REQUEST",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
  GET_POSTS_FAILURE = "GET_POSTS_FAILURE",
}

export interface FeedAction {
  type: ActionTypes;
  payload?: any;
  loading: boolean;
  error: string | null;
}

// Definiamo i tipi per lo stato globale dell'applicazione
export interface FeedState {
  list: Post[];
  selected: Post | null;
  loading: boolean;
  error: string | null;
}
