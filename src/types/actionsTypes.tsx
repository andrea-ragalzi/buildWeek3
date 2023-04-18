import Experience from './ExpType'

enum ActionTypes {
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
    DELETE_EXPERIENCE_FAILURE = "DELETE_EXPERIENCE_FAILURE"
}

interface GetExperiencesRequestAction {
    type: ActionTypes.GET_EXPERIENCES_REQUEST;
    loading: boolean;
}

interface GetExperiencesSuccessAction {
    type: ActionTypes.GET_EXPERIENCES_SUCCESS;
    payload: Experience[];
}

interface GetExperiencesFailureAction {
    type: ActionTypes.GET_EXPERIENCES_FAILURE;
    error: string;
}

interface AddExperienceRequestAction {
    type: ActionTypes.ADD_EXPERIENCE_REQUEST;
    loading: boolean;
}

interface AddExperienceSuccessAction {
    type: ActionTypes.ADD_EXPERIENCE_SUCCESS;
    payload: Experience;
}

interface AddExperienceFailureAction {
    type: ActionTypes.ADD_EXPERIENCE_FAILURE;
    error: string;
}

interface GetExperienceRequestAction {
    type: ActionTypes.GET_EXPERIENCE_REQUEST;
    loading: boolean;
}

interface GetExperienceSuccessAction {
    type: ActionTypes.GET_EXPERIENCE_SUCCESS;
    payload: Experience;
}

interface GetExperienceFailureAction {
    type: ActionTypes.GET_EXPERIENCE_FAILURE;
    error: string;
}

interface EditExperienceRequestAction {
    type: ActionTypes.EDIT_EXPERIENCE_REQUEST;
}

interface EditExperienceSuccessAction {
    type: ActionTypes.EDIT_EXPERIENCE_SUCCESS;
    payload: Experience;
}

interface EditExperienceFailureAction {
    type: ActionTypes.EDIT_EXPERIENCE_FAILURE;
    error: string;
}

interface DeleteExperienceRequestAction {
    type: ActionTypes.DELETE_EXPERIENCE_REQUEST;
    loading: boolean;
}

interface DeleteExperienceSuccessAction {
    type: ActionTypes.DELETE_EXPERIENCE_SUCCESS;
    payload: string;
}

interface DeleteExperienceFailureAction {
    type: ActionTypes.DELETE_EXPERIENCE_FAILURE;
    error: string;
}

type Action = GetExperiencesRequestAction
    | GetExperiencesSuccessAction
    | GetExperiencesFailureAction
    | AddExperienceRequestAction
    | AddExperienceSuccessAction
    | AddExperienceFailureAction
    | GetExperienceRequestAction
    | GetExperienceSuccessAction
    | GetExperienceFailureAction
    | EditExperienceRequestAction
    | EditExperienceSuccessAction
    | EditExperienceFailureAction
    | DeleteExperienceRequestAction
    | DeleteExperienceSuccessAction
    | DeleteExperienceFailureAction;

export default Action;