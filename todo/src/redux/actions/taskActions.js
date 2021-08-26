// Types
import { ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_ERROR,
    GET_TASKS, GET_TASKS_SUCCESS, GET_TASKS_ERROR } from '../types';
import axiosClient from '../../config/axios';

// Crear tareas
export function createTaskRedux(task){
    return async (dispatch) => {
        dispatch( addTaskAPI() );
            
        try {
            await axiosClient.post('/tasks', task);
            dispatch( addTaskAPISuccess(task) );
        } catch (e) {
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

// Listar tareas
export function getTasksRedux(){
    return async(dispatch) => {
        dispatch( getTasksAPI() );

        try {
            const res = await axiosClient.get('/tasks');
            dispatch( getTasksAPISuccess(res.data) );
        } catch (e) {
            dispatch ( getTasksAPIError(true) );
        }
    }
}

const getTasksAPI = () => ({
    type: GET_TASKS,
    payload: true
});

const getTasksAPISuccess = (tasks) => ({
    type: GET_TASKS_SUCCESS,
    payload: tasks
});

const getTasksAPIError = state => ({
    type: GET_TASKS_ERROR,
    payload: state
});