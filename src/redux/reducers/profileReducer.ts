import {
  ProfileState,
  ActionTypes,
  ProfileAction,
} from "../../types/profileReducer";
import { fetchProfile } from './../actions/profileActions'

const initialState: ProfileState = {
  list: [],
  selected: null,
  me: null,
  loading: false,
  error: null
};

const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case ActionTypes.GET_PROFILE_REQUEST:
    case ActionTypes.GET_PROFILES_REQUEST:
    case ActionTypes.EDIT_PROFILE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case ActionTypes.GET_PROFILE_FAILURE:
    case ActionTypes.GET_PROFILES_FAILURE:
    case ActionTypes.EDIT_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        error: null,
        loading: false,
      };
      case ActionTypes.GET_MY_PROFILE_SUCCESS:
        return {
          ...state,
          me: action.payload,
          error: null,
          loading: false,
        };
    case ActionTypes.GET_PROFILES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        error: null,
        loading: false,
      };
    case ActionTypes.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default profileReducer;