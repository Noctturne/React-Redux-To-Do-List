// Types
import { ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_ERROR } from '../types';

const initialState = {
    tasks: [],
    error: false,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TASK:
            return{
                ...state,
                loading: action.payload
            }
        case ADD_TASK_SUCCESS:
            return{
                ...state,
                loading: false,
                tasks: [...state.tasks, action.payload]
            }
        case ADD_TASK_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}