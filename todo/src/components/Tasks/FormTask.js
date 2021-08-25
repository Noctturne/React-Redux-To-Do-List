import React from 'react';

const FormTask = () => {
    return (
        <section className="col offset-md-2 col-md-8 my-4">
            <form className="text-center">
                <div className="input-group mb-2">
                    <input type="text" class="form-control mx-2" id="title" placeholder="Title"></input>
                </div>
                <div className="input-group mb-2">
                    <textarea class="form-control mx-2" placeholder="Just start entering text" id="description"></textarea>
                </div>
                <div className="input-group mb-2">
                    <input type="date" class="form-control mx-2" id="date"></input>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-dark"> New task </button>
                </div>
            </form>
        </section>
    )
}

export default FormTask;