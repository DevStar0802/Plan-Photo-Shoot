import '../App.css'

function Nav({ handlePageChange }) {
    return (
        <nav className="navbar dark-b">
            <div className="container-fluid">
                <a className="py-2 ps-3 white-text fs-2" href="#Main" onClick={() => handlePageChange('Main')}>Brent Buchanan</a>
                <div className="d-flex pe-3" role="search">
                    <a href="#AboutMe" onClick={() => handlePageChange('CreateJob')} className='mx-3 fs-5 green-text navi-link'>Create Job</a>
                    <a href="#Portfolio" onClick={() => handlePageChange('MyJobs')} className="mx-3 fs-5 green-text navi-link" >My Jobs</a>
                    <a href="#Contact" onClick={() => handlePageChange('Login')} className="mx-3 fs-5 green-text navi-link" >Login/Name</a>
                </div>
            </div>
        </nav>

    )
}

export default Nav;