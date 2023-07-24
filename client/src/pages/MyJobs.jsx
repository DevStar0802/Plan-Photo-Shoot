import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'

function MyJobs() {

    const [jobs, setJobs] = useState([])
    const userEmail = JSON.parse(localStorage.getItem('user'))
    let allJobs = ''

    useEffect(() => {
        fetchUserData();
    }, []);


    async function fetchUserData() {
        try {
            const response = await fetch("/api/user/focus", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: userEmail
                }),
            })
            const result = await response.json()
            console.log(result)

            allJobs = result.user.jobs
            setJobs(allJobs)

        } catch (error) {
            console.log(error)
        }
    }


    function displayJobs() {
        return jobs.map(job =>
            <div>
                <div className="col-12 border-bottom mb-3">
                    <p className='fs-5 fw-bold' key={job.jobName}>{job.address} ----- <Link to={"/job-page"} state={{ jobber: job.jobName }}>{job.jobName}</Link>  ----- {job.price}</p>
                </div>
            </div>)
    }

    return (
        <section className="projects-section bg-light" id="results">
            <div className="container px-4 px-lg-5" id="results-cont">
                <div className="row">
                    <div className="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div className=" text-lg-left">
                            <h1 className="mb-4 text-center">My Jobs</h1>
                        </div>
                        <div className="col-4 mb-4">
                            <a href="" className='btn btn-warning text-white fw-bold p-3'>Sort</a>
                        </div>
                        {displayJobs()}
                    </div>
                    <div>
                        <div className="col-12 border-bottom mb-3">
                            <Link to={"/create-job"} className='btn btn-warning'>Create Job</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyJobs








