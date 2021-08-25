import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="navbar bg-dark p-3">
            <div className="container-fluid">
            <Link to={"/"} className="navbar-brand mb-0 text-blue"><i class="fas fa-cat text-blue"></i> <strong>To-Do </strong> </Link>
            </div>
        </nav>
    )
}

export default Header;