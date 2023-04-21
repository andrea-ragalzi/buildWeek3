export enum ActionTypes {
    ADD_IMAGE_PROFILE_REQUEST = 'ADD_IMAGE_PROFILE_REQUEST',
    ADD_IMAGE_PROFILE_SUCCESS = 'ADD_IMAGE_PROFILE_SUCCESS',
    ADD_IMAGE_PROFILE_FAILURE = 'ADD_IMAGE_PROFILE_FAILURE',
    ADD_IMAGE_EXPERIENCE_REQUEST = 'ADD_IMAGE_EXPERIENCE_REQUEST',
    ADD_IMAGE_EXPERIENCE_SUCCESS = 'ADD_IMAGE_EXPERIENCE_SUCCESS',
    ADD_IMAGE_EXPERIENCE_FAILURE = 'ADD_IMAGE_EXPERIENCE_FAILURE',
    ADD_IMAGE_POST_REQUEST = 'ADD_IMAGE_POST_REQUEST',
    ADD_IMAGE_POST_SUCCESS = 'ADD_IMAGE_POST_SUCCESS',
    ADD_IMAGE_POST_FAILURE = 'ADD_IMAGE_POST_FAILURE'
}

export interface ImageAction {
    type: ActionTypes;
    payload?: any;
    loading: boolean;
    error: string | null;
}

export interface ImageState {
    loading: boolean;
    error: string | null;
}