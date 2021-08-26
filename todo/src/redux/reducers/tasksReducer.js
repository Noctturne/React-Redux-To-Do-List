// Types
import { ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_ERROR } from '../types';

const initialState = {
    tasks: [],
    error: false,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}