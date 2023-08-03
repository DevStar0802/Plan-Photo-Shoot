import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logoutFunction } from '../utils/Logout'
import React, { useState, useEffect } from 'react'
import { apiBaseUrl } from '../utils/API';

function checkName(user) {
    return user ? user : ""
}

function checkUsername(user) {
    return user ? user : ""
}


function Profile() {
    const [user, setUser] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const userEmail = JSON.parse(localStorage.getItem('user'));
        fetchUserData(userEmail);
    }, []);

    async function fetchUserData(email) {
        try {
            const response = await fetch(`${apiBaseUrl}/api/user/focus`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email
                }),
            })
            const result = await response.json()
            if (result.message === "Success") {
                setUser(result.user)
            }


        } catch (error) {
        }
    }


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
                            <h1 className="mb-4 text-center">Hi, {user.firstName}</h1>
                            <div className="card mb-4" id="">
                                <h5 className="card-header fw-bold">Email</h5>
                                <div className="card-body">
                                    <p id="">{user.email}</p>
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