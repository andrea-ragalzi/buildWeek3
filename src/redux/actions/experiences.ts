import Action from './../../types/actionsTypes'

const getExperiencesRequestAction: Action = () => {
    return {
        type: Action.ActionTypes.GET_EXPERIENCE,
    }
}