import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { changeDate } from '../utils/Date'
import { useFormik } from 'formik';

function JobPage() {
    // State to track whether link is copied or not
    const [isLinkCopied, setIsLinkCopied] = useState(false);
    const [jobs, setJobs] = useState({})
    //pull off the jobname from the location as state.jobber
    let { state } = useLocation();
    const urlJob = state.jobber;

    // When component mounts, call the fetch request for the job data
    useEffect(() => {
        fetchJobData(urlJob);
        getBucket()
        window.scrollTo(0, 0);
    }, []);

    async function getBucket() {
        try {
            const response = await fetch("/api/job/buckets", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let bucketData = await response.json()
        } catch (error) {

        }
    }

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
            if (jobData.length === 0) {
                console.log('No data from source for this jog')
            } else {
                jobData.job.date = changeDate(jobData.job.date)
                setJobs(jobData.job)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Form handler that handles uploading photos
    const formik = useFormik({
        initialValues: {
            pictures: []
        },
        onSubmit: async values => {
            try {
                const formData = new FormData();
                let picsArray = Array.from(values.pictures)
                if (values.pictures?.length) { // Check if pictures exist and have length
                    picsArray.forEach((file) => {
                        formData.append('files', file);
                    });

                    const response = await fetch('/api/job/upload', {
                        method: 'POST',
                        body: formData,
                    });

                    const result = await response.json();
                }
                else {
                    console.log('did not send for fetch request')
                }
            } catch (error) {
                console.log('We have an error:', error)
            }

        },
    });

    // File input change handler
    const handleFileChange = (event) => {
        const files = event.target.files;
        formik.setFieldValue('pictures', files);
    };


    function imageLoop() {
        const brent = [
            'brent1',
            'brent2',
            'brent3'
        ]

        const url = 'https://text-bucket-bb.s3.us-east-2.amazonaws.com/'
        return brent.map(brent =>
            <div>
                <img src={url + brent + ".jpg"} alt="" className="w-100 mb-3" />
            </div>)
    }

    function handleCopyLink() {
        // Get the current URL
        const currentURL = window.location.href;

        // Copy the link to the clipboard using the Clipboard API
        navigator.clipboard.writeText(currentURL).then(() => {
            // Show the tooltip for 2 seconds (adjust as needed)
            setIsLinkCopied(true);
            setTimeout(() => {
                setIsLinkCopied(false);
            }, 2000);
        });
    }

    return (
        <section className="projects-section bg-light" id="results">
            <div className="container px-4 px-lg-5" id="results-cont">
                <div className="row">
                    <div className="col-sm-10 col-lg-6 mx-auto mt-4">
                        {/* Job Details */}
                        <div className=" text-lg-left">
                            <h1 className="mb-4 text-center">{jobs.jobName || "jobs"}</h1>
                            <div className='text-center'>
                                <h2 className='fs-2 text-primary' >${jobs.price || 'Price'}</h2>
                            </div>
                            <div className='text-center '>
                                {/* <p className='text-warning fs-4'>{isLinkCopied ? 'Link Copied!' : ''}</p> */}
                                {isLinkCopied && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '270px', // Adjust the position as needed
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: '#f0ad4e',
                                            color: 'white',
                                            padding: '5px 10px',
                                            borderRadius: '5px',
                                            boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.3)',
                                        }}
                                    >
                                        Link Copied!
                                    </div>
                                )}
                            </div>
                            <div className='text-center'>
                                <a className='my-3 btn btn-warning' onClick={handleCopyLink} >{jobs.shareLink || 'Share Link'}</a>
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
                            {/* <div className="card mb-4" id="">
                                <h5 className="card-header fw-bold">Images</h5>
                                <div className="card-body">
                                    {imageLoop()}
                                </div>
                            </div> */}
                            {/* Form to upload Photos */}
                            {/* <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                                <div className='py-2'>
                                    <input class="form-control" type="file" multiple name="pictures" onChange={handleFileChange} />
                                </div>
                                <div className='py-2'>
                                    <button type='submit' className='btn btn-warning p-3 '>Upload Photos</button>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


}

export default JobPage