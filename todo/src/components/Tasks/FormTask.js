import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTaskRedux } from '../../redux/actions/taskActions';

const FormTask = () => {
    const dispatch = useDispatch();
    const createTask = () => dispatch( createTaskRedux() );

    const handleSubmit = e => {
        e.preventDefault();
        createTask();

    }

    return (
        <section className="col offset-md-2 col-md-8 my-4">
            <form className="text-center" onSubmit={handleSubmit}>
                <div className="input-group mb-2">
                    <input type="text" className="form-control mx-2" id="title" placeholder="Title"></input>
                </div>
                <div className="input-group mb-2">
                    <textarea className="form-control mx-2" placeholder="Just start entering text" id="description"></textarea>
                </div>
                <div className="input-group mb-2">
                    <input type="date" className="form-control mx-2" id="date"></input>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary text-light"> New task </button>
                </div>
            </form>
        </section>
    )
}

export default FormTask;