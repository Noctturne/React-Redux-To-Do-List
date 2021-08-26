import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getTasksRedux } from '../../redux/actions/taskActions';

const Tasks = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const loadingTasks = () => dispatch(getTasksRedux())
        loadingTasks();
    }, []);
    
    

    return (
        <main className="tasks">
            <div className="row">
                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"> Title </h4>
                            <p className="card-text"> Description example </p>
                            <small className="text-muted"> 20:33 </small>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={"/tasks/new"} className="btn-secondary btn-floating position-fixed rounded-circle"><i className="fas fa-plus text-primary"></i></Link> 
        </main>
    )
}

export default Tasks;