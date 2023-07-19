import '../App.css'

function Nav({ handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light text-primary" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand text-dark" href="#page-top">Photography </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link text-dark" href="#photo-form" id="newSearch">New Search</a></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#photo-form" id="newSearch">My Jobs</a></li>
                        <li className="nav-item"><a className="nav-link text-dark" href="#photo-form" id="newSearch">Login\Profile</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;