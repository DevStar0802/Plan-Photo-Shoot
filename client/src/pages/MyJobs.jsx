import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import deleteJob from '../utils/deleteJob';
import fetchUserData from '../utils/fetchUser';

function MyJobs() {
    const [user, setUser] = useState({})
    const [jobs, setJobs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const userEmail = JSON.parse(localStorage.getItem('user'))
    let allJobs = ''

    //initiate the fetchUserData function when the page loads
    useEffect(() => {
        getUserData()
    }, []);

    //fetch the data for the logged in user to get the jobs they have saved
    async function getUserData() {
        try {
            const result = await fetchUserData(userEmail)
            setUser(result)
            allJobs = result.jobs
            setJobs(allJobs)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    //deletes the job from the database and then fetches the updated user data
    async function removeJob(jobId) {
        try {
            console.log(user)
            const result = await deleteJob(jobId, user)
            if (result === "Success") {
                getUserData()
            }
        } catch (error) {
            console.log(error)
        }
    }

    //display the jobs saved to the user, if no jobs then display no jobs message
    function displayJobs() {
        if (jobs.length === 0) {
            return (
                <div className="card mb-4">
                    <h5 className="card-header fw-bold border-0">You Have No Jobs!</h5>
                    <div className="card-body">
                        <p id="">Click the button below to make your first job</p>
                    </div>
                </div>
            )
        }
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
                <div className='text-center mb-2'>
                    <button className='btn btn-danger' type='button' onClick={() => removeJob(job._id)}>Delete Job</button>
                </div>
            </div>
        )
    }

    // return a loading symbol while the data is being fetched and then display the data via the displayJobs function
    return (isLoading ?
        <section className="projects-section bg-light" id="results">
            <div className="container px-4 px-lg-5" id="results-cont">
                <div className="row">
                    <div className="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border text-warning" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        :
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








