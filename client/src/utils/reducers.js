import { useReducer } from 'react';
import {
    DATA_TO_RESULTS,
    DATA_TO_CREATE_JOB
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {

        //action to pass data from main page to results page
        case DATA_TO_RESULTS:
            return {
                ...state,
                form: [...action.form],
            };

        //action to pass data from results page to create job page
        case DATA_TO_CREATE_JOB:
            return {
                ...state,
                form: [...action.form],
            };

        default:
            return state;
    }
};

export function useFormReducer(initialState) {
    return useReducer(reducer, initialState);
}