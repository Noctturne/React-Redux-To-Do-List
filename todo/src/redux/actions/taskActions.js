// Types
import { ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_ERROR } from '../types';
import axiosClient from '../../config/axios';

// Crear tareas
export function createTaskRedux(task){
    return async (dispatch) => {
        dispatch( addTaskAPI() );
            
        try {
            console.log(task);
            await axiosClient.post('/tasks', task);
            dispatch( addTaskAPISuccess(task) );
        } catch (e) {
            console.log(e);
            dispatch ( addTaskAPIError(true) );
        }
    }
}

const addTaskAPI = () => ({
    type: ADD_TASK,
    payload: true
});

const addTaskAPISuccess = task => ({
    type: ADD_TASK_SUCCESS,
    payload: task
});

const addTaskAPIError = state => ({
    type: ADD_TASK_ERROR,
    payload: state
});