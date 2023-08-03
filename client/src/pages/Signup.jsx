import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { apiBaseUrl } from '../utils/API';


//formik forms
import { useFormik } from 'formik';

function Signup() {

    const navigate = useNavigate();

    //fomik form handler
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        onSubmit: async values => {
            try {
                const response = await fetch(`${apiBaseUrl}/api/user`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        password: values.password
                    }),
                })
                const result = await response.json()
                if (result.message === 'Success') {
                    navigate('/login')
                } else {
                    alert('Error creating user, please try again')
                }
                console.log(result)

            } catch (error) {
                console.log(error);
            }
        }
    })


    return (
        <section className="projects-section bg-light" id="results">
            <div className="container px-4 px-lg-5" id="results-cont">
                <div className="row">
                    <div className="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div className=" text-lg-left">
                            <h1 className="mb-4 text-center">Sign Up</h1>
                            <form id="p-form" onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label text-dark">First Name</label>
                                    <input type="text" className="form-control" id="firstName" onChange={formik.handleChange} values={formik.values.firstName} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label text-dark">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" onChange={formik.handleChange} values={formik.values.lastName} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-dark">Email</label>
                                    <input type="email" className="form-control" id="email" onChange={formik.handleChange} values={formik.values.email} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-dark">Password</label>
                                    <input type="password" className="form-control" id="password" onChange={formik.handleChange} values={formik.values.email} required />
                                </div>
                                <div className="text-center">
                                    <button type="submit" id="btn-submit" className="btn btn-warning text-center">Sign Up!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup