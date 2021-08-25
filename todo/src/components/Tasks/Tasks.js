import React from 'react';
import { Link } from 'react-router-dom';
const Tasks = () => {
    return (
        <main className="tasks">
            <Link to={"/tasks/new"} className="btn-floating bg-dark text-blue"><i className="fas fa-plus"></i></Link> 
        </main>
    )
}

export default Tasks;