import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <Link className="navbar-brand fw-bold text-white" to="/">FaceCook</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav gap-3">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">
                            <i className="bi bi-house-door-fill fs-4"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/watch">
                            <i className="bi bi-play-btn-fill fs-4"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/marketplace">
                            <i className="bi bi-shop-window fs-4"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/groups">
                            <i className="bi bi-people-fill fs-4"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/games">
                            <i className="bi bi-controller fs-4"></i>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="d-none d-lg-flex align-items-center gap-3">
                <div className="d-none d-lg-block">
                    <input className="form-control form-control-sm bg-secondary text-white border-0" type="search" placeholder="Search Facebook" />
                </div>
                <button className="btn btn-secondary rounded-circle p-2">
                    <i className="bi bi-bell-fill"></i>
                </button>
                <button className="btn btn-secondary rounded-circle p-2">
                    <i className="bi bi-person-circle"></i>
                </button>
            </div>
        </nav>
    );
}

export default Header;
