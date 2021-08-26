// Types
import { ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_ERROR,
    GET_TASKS, GET_TASKS_SUCCESS, GET_TASKS_ERROR,
    DELETE_TASK, DELETE_TASK_SUCCESS, DELETE_TASK_ERROR} from '../types';

const initialState = {
    tasks: [],
    error: false,
    loading: false,
    selectedTask: null
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_TASK:
        case GET_TASKS:
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
        case GET_TASKS_ERROR:
        case DELETE_TASK_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_TASKS_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                tasks: action.payload
            }
        case DELETE_TASK:
            return{
                ...state,
                selectedTask: action.payload
            }
        case DELETE_TASK_SUCCESS:
            return{
                ...state,
                tasks: state.tasks.filter(task => task.id !== state.selectedTask),
                selectedTask: null
            }
        default:
            return state;
    }
}