import React from 'react';

import { useDispatch } from 'react-redux';
import { deleteTaskRedux } from '../../redux/actions/taskActions';


const Task = ({task}) => {
    const { id, title, description, date} = task;

    const dispatch = useDispatch();

    const confirm = id => {
        dispatch( deleteTaskRedux(id) );
    }


    return (
        <div className="col-sm-6 col-lg-4 p-2">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title"> {title} </h4>
                    <p className="card-text"> {description} </p>
                    <small className="text-muted"> {date} </small>
                    <button type="button" className="btn bt-primary float-end" title="Delete"
                        data-bs-toggle="modal" data-bs-target="#taskModal">
                            <i className="fas fa-times text-primary"></i>
                    </button>
                </div>
            </div>

            <div className="modal fade" id="taskModal" tabIndex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="taskModalLabel">Do you want to delete this task?</h5>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => confirm(id)}>Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task;