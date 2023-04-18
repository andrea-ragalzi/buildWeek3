import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { ExperienceState, Experience } from './../../types/expReducer'

const initialState: ExperienceState = {
    experiences: Experience[]
};

export const experiencesReducer = (
    state: RootState = initialState, action: PayloadAction) => {
    switch (action.type) {
        case value:

            break;

        default:
            break;
    }
}