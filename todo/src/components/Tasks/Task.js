import React from 'react';

const Task = ({task}) => {
const { title, description, date} = task;

    return (
        <div className="col-sm-6 col-lg-4 p-2">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title"> {title} </h4>
                <p className="card-text"> {description} </p>
                <small className="text-muted"> {date} </small>
                <button type="buton" className="btn bt-primary float-end"><i className="fas fa-times text-primary"></i></button>
            </div>
        </div>
    </div>
    )
}

export default Task;