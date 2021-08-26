// Types
import { ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_ERROR } from '../types';

// Crear tareas
export function createTaskRedux(task){
    return () => {
        console.log(task);
    }
}