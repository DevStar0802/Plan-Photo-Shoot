import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { changeDate } from '../utils/Date'
import { useFormik } from 'formik';

function JobPage() {
    const [jobs, setJobs] = useState({})
    //pull off the jobname from the location as state.jobber
    let { state } = useLocation();
    const urlJob = state.jobber;
    console.log('This is the state pulled off the location and passed into the fetch request: ', urlJob)

    // When component mounts, call the fetch request for the job data
    useEffect(() => {
        fetchJobData(urlJob);
    }, []);

    // Fetch the data to populate the page with name, price, etc.
    async function fetchJobData(name) {
        try {
            const response = await fetch("/api/job/focus", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    jobName: name
                }),
            })
            let jobData = await response.json()
            console.log('This is Job Data', jobData)
            if (jobData.length === 0) {
                console.log('No data from source for this jog')
            } else {
                console.log('this is jobsData.date: ', jobData.job.date)
                jobData.job.date = changeDate(jobData.job.date)
                setJobs(jobData.job)
                console.log('this is jobs after time change:', jobs)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Form handler that handles uploading photos
    const formik = useFormik({
        initialValues: {
            pictures: [],
        },
        onSubmit: async values => {
            try {
                const formData = new FormData();

                // Convert FileList to array using Array.from
                const picturesArray = Array.from(values.pictures);
                picturesArray.forEach((picture) => {
                    formData.append('picture_${index}', picture);
                });
                console.log('here is the formData: ', formData)
                const response = await fetch('/api/job/upload', {
                    method: 'POST',
                    body: formData,
                });

                const result = await response.json()
                console.log(result.message)
            } catch (error) {
                console.log('We have an error:', error)
            }

        },
    });


    return (
        <section className="projects-section bg-light" id="results">
            <div className="container px-4 px-lg-5" id="results-cont">
                <div className="row">
                    <div className="col-sm-10 col-lg-6 mx-auto mt-4">
                        {/* Job Details */}
                        <div className=" text-lg-left">
                            <h1 className="mb-4 text-center">{jobs.jobName || "jobs"}</h1>
                            <div className='text-center'>
                                <h2 className='fs-4 text-primary' >{jobs.price || 'Price'}</h2>
                            </div>
                            <div className='text-center'>
                                <a className='my-3 btn btn-warning' >{jobs.shareLink || 'Share Link'}</a>
                            </div>
                            <div className="card mb-4" id="">
                                <h5 className="card-header fw-bold">Date</h5>
                                <div className="card-body">
                                    <p id=""> {jobs.date}</p>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <h5 className="card-header fw-bold">Customer</h5>
                                <div className="card-body">
                                    <p id=""> {jobs.custName}</p>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <h5 className="card-header fw-bold">Address</h5>
                                <div className="card-body">
                                    <p id=""> {jobs.address}</p>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <h5 className="card-header fw-bold">Square Feet</h5>
                                <div className="card-body">
                                    <p id=""> {jobs.sqFt}</p>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <h5 className="card-header fw-bold">Miles From Airport</h5>
                                <div className="card-body">
                                    <p id=""> {jobs.milesFromAir}</p>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <h5 className="card-header fw-bold">Notes</h5>
                                <div className="card-body">
                                    <p id=""> {jobs.notes}</p>
                                </div>
                            </div>
                            {/* Form to upload Photos */}
                            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                                <div className='py-2'>
                                    <input class="form-control" type="file" multiple name="pictures" onChange={(event) => {
                                        formik.setFieldValue('pictures', event.currentTarget.files);
                                    }} />
                                </div>
                                <div className='py-2'>
                                    <button type='submit' className='btn btn-warning p-3 '>Upload Photos</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


}

export default JobPage