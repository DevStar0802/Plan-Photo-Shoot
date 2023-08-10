import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logoutFunction } from '../utils/Logout'
import React, { useState, useEffect } from 'react'
import { set } from 'date-fns';


function Profile() {
    const [user, setUser] = useState('')
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)

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
                setIsLoading(false)
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

    // return a loading symbol while the component is being mounted and then display the user data
    return (!isLoading ?
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
                                <Link className='text-decoration-none btn btn-secondary fs-5' to="/my-jobs">
                                    See Jobs
                                </Link>
                            </div>
                            <div className="text-center">
                                <button href="" className='btn btn-warning' onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        :
        <section className="projects-section bg-light" id="results">
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </section>
    )
}

export default Profile