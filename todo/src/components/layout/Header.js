import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="navbar bg-secondary p-3">
            <div className="container-fluid">
            <Link to={"/"} className="navbar-brand mb-0 text-primary"><i className="fas fa-cat text-primary"></i> <strong>To-Do </strong> </Link>
            </div>
        </nav>
    )
}

export default Header;