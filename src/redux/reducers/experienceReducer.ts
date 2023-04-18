import { ExperienceState } from "../../types/expReducer";
import { ActionTypes, Action } from "../../types/expReducer";

const initialState: ExperienceState = {
  experiences: [],
  selectedExperience: null,
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
        experiences: [],
        loading: true,
        error: null,
      };

    case ActionTypes.GET_EXPERIENCES_SUCCESS:
      return { ...state, experiences: action.payload, loading: false };

    case ActionTypes.ADD_EXPERIENCE_SUCCESS:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
        loading: false,
      };

    case ActionTypes.GET_EXPERIENCE_SUCCESS:
      return {
        ...state,
        selectedExperience: action.payload,
        loading: false,
      };

    case ActionTypes.EDIT_EXPERIENCE_SUCCESS:
      return {
        ...state,
        experiences: state.experiences.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp
        ),
        selectedExperience: null,
        loading: false,
      };

    case ActionTypes.DELETE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        experiences: state.experiences.filter(
          (exp) => exp._id !== action.payload.id
        ),
        selectedExperience: null,
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
