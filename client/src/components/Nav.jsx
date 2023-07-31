import '../App.css'
import { Link } from 'react-router-dom';
import { useUserContext } from '../utils/UserContext';
import { useEffect } from 'react'

function Nav({ handlePageChange }) {
    const { users, logInUser, logOutUser } = useUserContext();

    //upon load, check if user is logged in
    useEffect(() => {
        const currSession = JSON.parse(localStorage.getItem('session'));
        const currUser = JSON.parse(localStorage.getItem('user'));
        if (!currSession) {
            return logOutUser('')
        }
        // Convert timestamp in milliseconds to a Date object
        const timeStamp = Date.now();
        const currTime = new Date(timeStamp);

        // Convert ISO 8601 formatted string to a Date object
        const sessExpire = new Date(currSession.cookie.expires);
        if (sessExpire > currTime) {
            logInUser(currUser)
        }
    }, []);

    return (!users.logged_in ?
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
                        <li className="nav-item"><Link className="nav-link text-dark text-decoration-none" to="/login" href="" id="newSearch">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        : <nav className="navbar navbar-expand-lg navbar-light text-primary" id="mainNav">
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
                        <li className="nav-item"><Link className="nav-link text-dark text-decoration-none" to="/profile" href="" id="newSearch">Profile</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;