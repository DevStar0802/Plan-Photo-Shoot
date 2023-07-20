import '../App.css'
import { Link } from 'react-router-dom';

function Nav({ handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light text-primary" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link to="/" className='text-decoration-none navbar-brand text-dark' href="#page-top">
                    Photography
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link text-dark text-decoration-none" to="/create-job" href="#photo-form" id="newSearch">Create Job</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark text-decoration-none" to="/my-jobs" href="#photo-form" id="newSearch">My Jobs</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark text-decoration-none" to="/profile" href="" id="newSearch">Login\Profile</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;