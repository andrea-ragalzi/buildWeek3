import { FeedState, ActionTypes, FeedAction } from "../../types/feedTypes";

const initialState: FeedState = {
  list: [],
  selected: null,
  loading: true,
  error: null,
};

const feedReducer = (state = initialState, action: FeedAction): FeedState => {
  switch (action.type) {
    case ActionTypes.GET_POSTS_REQUEST:
    case ActionTypes.ADD_POST_REQUEST:
    case ActionTypes.GET_POST_REQUEST:
    case ActionTypes.EDIT_POST_REQUEST:
    case ActionTypes.DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ActionTypes.GET_POSTS_SUCCESS:
      return { ...state, list: action.payload, loading: false };

    case ActionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };

    case ActionTypes.GET_POST_SUCCESS:
      return {
        ...state,
        selected: action.payload,
        loading: false,
      };

    case ActionTypes.EDIT_POST_SUCCESS:
      return {
        ...state,
        list: state.list.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
        loading: false,
      };

    case ActionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        list: state.list.filter((post) => post._id !== action.payload),
        loading: false,
      };

    case ActionTypes.GET_POSTS_FAILURE:
    case ActionTypes.ADD_POST_FAILURE:
    case ActionTypes.GET_POST_FAILURE:
    case ActionTypes.EDIT_POST_FAILURE:
    case ActionTypes.DELETE_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default feedReducer;
