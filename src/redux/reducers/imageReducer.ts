import { ImageState, ActionTypes, ImageAction } from "../../types/imageTypes";

const initialState: ImageState = {
    loading: true,
    error: null,
};

const feedReducer = (state = initialState, action: ImageAction): ImageState => {
    switch (action.type) {
        case ActionTypes.ADD_IMAGE_PROFILE_REQUEST:
        case ActionTypes.ADD_IMAGE_EXPERIENCE_REQUEST:
        case ActionTypes.ADD_IMAGE_POST_REQUEST:
            return { ...state, loading: true, error: null, };

        case ActionTypes.ADD_IMAGE_PROFILE_SUCCESS:
        case ActionTypes.ADD_IMAGE_EXPERIENCE_SUCCESS:
        case ActionTypes.ADD_IMAGE_POST_SUCCESS:
            return { ...state, loading: false };

        case ActionTypes.ADD_IMAGE_PROFILE_FAILURE:
        case ActionTypes.ADD_IMAGE_EXPERIENCE_FAILURE:
        case ActionTypes.ADD_IMAGE_POST_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default feedReducer;
