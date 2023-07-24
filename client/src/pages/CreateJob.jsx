import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function CreateJob() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            jobName: '',
            custName: '',
            address: '',
            sqFt: 0,
            milesFromAir: 0,
            price: 0,
            notes: '',
            photos: false,
            drone: false,
            tour: false
        },
        onSubmit: async values => {
            try {
                const response = await fetch("/api/job", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                })

                const result = await response.json()
                console.log(result.message)
                if (result.message === 'Success') {
                    //display success message then pull user data from local storage
                    console.log('yay job created successfully!');
                    console.log('here is result.job._id ', result.job._id);
                    const userData = JSON.parse(localStorage.getItem('user'))
                    const userEmail = userData.email
                    const urlString = `/api/user/${userEmail}`
                    console.log('user email: ', userEmail);
                    //Run fetch request to add job to user profile
                    try {
                        const response = await fetch(urlString, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                _id: result.job._id
                            }),
                        })

                        const userResults = await response.json()

                        if (userResults.message === "Success") {
                            navigate("/job-page", { state: { jobber: result.job.jobName } });
                        }
                        else {
                            console.log('error adding job to user')
                        }
                    } catch (error) {
                        console.log(error)
                    }


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
                            <h1 className="mb-4 text-center">Create New Job </h1>
                            <form id="p-form" onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="jobName" className="form-label text-dark">Job Name</label>
                                    <input type="text" className="form-control" id="jobName" onChange={formik.handleChange} values={formik.values.jobName} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="custName" className="form-label text-dark">Customer Name</label>
                                    <input type="text" className="form-control" id="custName" onChange={formik.handleChange} values={formik.values.custName} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label text-dark">Property Address</label>
                                    <input type="text" className="form-control" id="address" onChange={formik.handleChange} values={formik.values.address} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sqFt" className="form-label text-dark">Square Footage</label>
                                    <input type="number" className="form-control" id="sqFt" min="1" onChange={formik.handleChange} values={formik.values.sqFt} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="milesFromAir" className="form-label text-dark">Miles From Airport</label>
                                    <input type="number" className="form-control" id="milesFromAir" min="0" onChange={formik.handleChange} values={formik.values.milesFromAir} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label text-dark">$ Price</label>
                                    <input type="number" className="form-control" id="price" min="0" onChange={formik.handleChange} values={formik.values.price} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="notes" className="form-label text-dark">Notes</label>
                                    <input type="text" className="form-control" id="notes" min="0" onChange={formik.handleChange} values={formik.values.notes} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input  " id="photos" name='photos' onChange={formik.handleChange} checked={formik.values.photos} />
                                    <label className="form-check-label text-dark" htmlFor="hdr">Are you taking HDR photos?</label>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input " id="drone" onChange={formik.handleChange} checked={formik.values.drone} />
                                    <label className="form-check-label text-dark" htmlFor="drone">Are you taking drone
                                        photos?</label>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="tour" onChange={formik.handleChange} checked={formik.values.tour} />
                                    <label className="form-check-label text-dark" htmlFor="tour">Are you capturing a virtual
                                        tour?</label>
                                </div>
                                <div className="text-center">
                                    <button type="submit" id="btn-submit"
                                        className="btn btn-warning text-center">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateJob