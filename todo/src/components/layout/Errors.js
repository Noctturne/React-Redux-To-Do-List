import React from 'react';


const Errors = (msg) => {
    return (
        <div className="alert alert-warning m-2" role="alert">
            <p className="text-center">{{msg}}</p>
        </div>
    )
}

export default Errors;