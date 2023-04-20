import { ExperienceState } from "../../types/experienceTypes";
import { ActionTypes, Action } from "../../types/experienceTypes";

const initialState: ExperienceState = {
  list: [],
  selected: null,
  loading: false,
  error: null,
};

const experienceReducer = (
  state = initialState,
  action: Action
): ExperienceState => {
  switch (action.type) {
    case ActionTypes.GET_EXPERIENCES_REQUEST:
    case ActionTypes.ADD_EXPERIENCE_REQUEST:
    case ActionTypes.GET_EXPERIENCE_REQUEST:
    case ActionTypes.EDIT_EXPERIENCE_REQUEST:
    case ActionTypes.DELETE_EXPERIENCE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ActionTypes.GET_EXPERIENCES_SUCCESS:
      return { ...state, list: action.payload, loading: false };

    case ActionTypes.ADD_EXPERIENCE_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };

    case ActionTypes.GET_EXPERIENCE_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        loading: false,
      };

    case ActionTypes.EDIT_EXPERIENCE_SUCCESS:
      return {
        ...state,
        list: state.list.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp
        ),
        loading: false,
      };

    case ActionTypes.DELETE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        list: state.list.filter((exp) => exp._id !== action.payload),
        loading: false,
      };

    case ActionTypes.GET_EXPERIENCES_FAILURE:
    case ActionTypes.ADD_EXPERIENCE_FAILURE:
    case ActionTypes.GET_EXPERIENCE_FAILURE:
    case ActionTypes.EDIT_EXPERIENCE_FAILURE:
    case ActionTypes.DELETE_EXPERIENCE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default experienceReducer;
