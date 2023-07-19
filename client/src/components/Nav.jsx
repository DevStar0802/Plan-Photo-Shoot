import '../App.css'
import { Link } from 'react-router-dom';

function Nav({ handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light text-primary" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link to="/" className='text-decoration-none'>
                    <a className="navbar-brand text-dark" href="#page-top">Photography </a>
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <Link className='text-decoration-none' to="/create-job">
                            <li className="nav-item"><a className="nav-link text-dark" href="#photo-form" id="newSearch">Create Job</a></li>
                        </Link>
                        <Link className='text-decoration-none' to="/my-jobs">
                            <li className="nav-item"><a className="nav-link text-dark" href="#photo-form" id="newSearch">My Jobs</a></li>
                        </Link>
                        <Link to="/profile" className='text-decoration-none'>
                            <li className="nav-item"><a className="nav-link text-dark" href="" id="newSearch">Login\Profile</a></li>
                        </Link>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;