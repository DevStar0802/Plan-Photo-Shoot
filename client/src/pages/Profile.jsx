import { Link, useNavigate } from 'react-router-dom';
import { logoutFunction } from '../utils/Logout'
import React from 'react'
import { useUserContext } from '../utils/UserContext';

function checkName(user) {
    return user ? user : ""
}

function checkUsername(user) {
    return user ? user : ""
}


function Profile() {
    const { users, logInUser } = useUserContext();
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('user'))
    const userName = userData.firstName

    const handleLogout = async () => {
        const redirectURL = await logoutFunction();
        if (redirectURL) {
            navigate(redirectURL);
        }
    };

    return (
        <section className="projects-section bg-light" id="results">
            <div className="container px-4 px-lg-5" id="results-cont">
                <div className="row">
                    <div className="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div className=" text-lg-left">
                            <h1 className="mb-4 text-center">Hi, {checkName(userName)}</h1>
                            <div className="card mb-4" id="">
                                <h5 className="card-header fw-bold">Email</h5>
                                <div className="card-body">
                                    <p id="">{checkUsername(userData.email)}</p>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <h5 className="card-header fw-bold">Password</h5>
                                <div className="card-body">
                                    <p id=""> ************</p>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <h5 className="card-header fw-bold">My Jobs</h5>
                                <div className="card-body">
                                    <Link className='text-decoration-none btn' to="/my-jobs">
                                        <p id=""> See Jobs</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <h5 className="card-header fw-bold">Earnings</h5>
                                <div className="card-body">
                                    <p id=""><a href="" className="btn"> See Earnings </a></p>
                                </div>
                            </div>
                            <div className="text-center"></div>
                            <button href="" className='btn btn-warning' onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile