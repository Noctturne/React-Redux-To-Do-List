import React from 'react';
import { useDispatch } from 'react-redux';
import { createTaskRedux } from '../../redux/actions/taskActions';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormTask = () => {
    const dispatch = useDispatch();
    const createTask = task => dispatch( createTaskRedux(task) );


    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            date: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            description: Yup.string().required('Description is required')
        }),
        onSubmit: values => {
            createTask(values);
        }
    })

    return (
        <section className="col offset-md-2 col-md-8 my-4">
            <form className="text-center" onSubmit={formik.handleSubmit}>
                <div className="input-group mb-2">
                    <input type="text" className="form-control mx-2" id="title" placeholder="Title" 
                        value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                </div>
                {formik.touched.title && formik.errors.title ? (
                        <div className="col m-2"><small className="text-center"> * { formik.errors.title } </small> </div>
                    ) : null 
                }
                <div className="input-group mb-2">
                    <textarea className="form-control mx-2" placeholder="Just start entering text" id="description" 
                        value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
                </div>
                {formik.touched.description && formik.errors.description ? (
                        <div className="col m-2"><small className="text-center"> * { formik.errors.description } </small> </div>
                    ) : null 
                    }
                <div className="input-group mb-2">
                    <input type="date" className="form-control mx-2" id="date" 
                        value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary text-light"> New task </button>
                </div>
            </form>
        </section>
    )
}

export default FormTask;