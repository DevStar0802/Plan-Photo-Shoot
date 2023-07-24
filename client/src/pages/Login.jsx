import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import { useUserContext } from '../utils/UserContext';


function Login() {
    const navigate = useNavigate();
    const { logOutUser, logInUser } = useUserContext();

    useEffect(() => {
        const currSession = JSON.parse(localStorage.getItem('session'));
        const currUser = JSON.parse(localStorage.getItem('user'));
        if (!currSession) {
            return logOutUser('')
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async values => {
            try {
                const response = await fetch("/api/user/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                })

                const result = await response.json()
                console.log(result.message)
                if (result.message === 'Logged in!') {
                    logInUser(result.user)
                    localStorage.setItem('session', JSON.stringify(result.the_session))
                    localStorage.setItem('user', JSON.stringify(result.user))
                    navigate("/profile")
                }
            } catch (error) {
                console.log(error)
            }

        },
    });

    return (
        <section className="projects-section bg-light" id="results">
            <div className="container px-4 px-lg-5" id="results-cont">
                <div className="row">
                    <div className="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div className=" text-lg-left">
                            <h1 className="mb-4 text-center">Login</h1>
                            <div className=" mb-4" id="">
                                <form onSubmit={formik.handleSubmit}>
                                    <label htmlFor="email" className='text-dark'>Email Address</label>
                                    <div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                        />
                                    </div>
                                    <label htmlFor="password" className='text-dark'>Password</label>
                                    <div>

                                        <input
                                            id="password"
                                            name="password"
                                            type="text"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                        />
                                    </div>
                                    {/* <input type="text" placeholder='What is your password?' onChange={setPassword(e)} /> */}
                                    <button type='submit'>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login