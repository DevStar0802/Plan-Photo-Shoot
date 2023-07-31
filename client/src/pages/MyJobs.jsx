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

            allJobs = result.user.jobs
            setJobs(allJobs)

        } catch (error) {
            console.log(error)
        }
    }


    function displayJobs() {
        return jobs.map(job =>
            <div className="card mb-4" key={"div1 " + job.jobName}>
                <h5 className="card-header fw-bold border-0" key={"header " + job.jobName}>{job.jobName}</h5>
                <div className="card-body" key={"div2 " + job.jobName}>
                    <h5 key={"address " + job.jobName}>Address:</h5>
                    <Link className='text-decoration-none ' to={"/job-page"} state={{ jobber: job.jobName }} key={"Link " + job.jobName}>
                        <p id="" key={"address" + job.jobName}>{job.address}</p>
                    </Link>
                    <h5 key={"price header" + job.jobName}>Price:</h5>
                    <p id="" key={"price" + job.jobName}>{job.price}</p>
                </div>
            </div>
        )
    }

    return (
        <section className="projects-section bg-light" id="results">
            <div className="container px-4 px-lg-5" id="results-cont">
                <div className="row">
                    <div className="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div className=" text-lg-left">
                            <h1 className="mb-4 text-center">My Jobs</h1>
                        </div>
                        {/* <div className="col-4 mb-4">
                            <a href="" className='btn btn-warning text-white fw-bold p-3'>Sort</a>
                        </div> */}
                        {displayJobs()}
                    </div>
                </div>
                <div className='row'>
                    <div className="col-sm-10 col-lg-6 mx-auto mt-4 ">
                        <div className="col-4 mb-4 mx-auto text-center">
                            <Link to={"/create-job"} className='btn btn-warning text-white fw-bold'>Create Job</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyJobs








