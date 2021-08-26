import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getTasksRedux } from '../../redux/actions/taskActions';

import Task from './Task';
import Errors from '../layout/Errors';
import Spinner from '../layout/Spinner';

const Tasks = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const loadingTasks = () => dispatch(getTasksRedux())
        loadingTasks();
    }, []);
    
    const tasks = useSelector(state => state.tasks.tasks);
    const error = useSelector((state) => state.tasks.error);
    const loading = useSelector((state) => state.tasks.loading);

    return (
        <main className="tasks">
            {loading ? <Spinner/> : 
                <div className="row g-0">
                {error ? <Errors msg=" Oops! Something happened "/> : null }
                {tasks.map(task => (
                    <Task key={task.id} task={task}/>
                ))}
            </div>
            }  

            <Link to={"/tasks/new"} className="btn-secondary btn-floating position-fixed rounded-circle"><i className="fas fa-plus text-primary"></i></Link> 
        </main>
    )
}

export default Tasks;