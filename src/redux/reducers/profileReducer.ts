import {
  ProfileState,
  ActionTypes,
  ProfileAction,
} from "../../types/profileReducer";

const initialState: ProfileState = {
  profile: null,
  error: null,
  loading: false,
};

const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileState => {
  switch (action.type) {
    case ActionTypes.GET_PROFILE_REQUEST:
      return {
        ...state,
        profile: null,
        error: null,
        loading: true,
      };
    case ActionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        error: null,
        loading: false,
      };
    case ActionTypes.GET_PROFILE_FAILURE:
      return {
        ...state,
        profile: null,
        error: action.payload,
        loading: false,
      };
  }
};

export default profileReducer;
