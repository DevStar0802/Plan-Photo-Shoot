import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useUserContext } from '../utils/UserContext';



function MyJobs() {

    const [jobs, setJobs] = useState([])

    const { users } = useUserContext();
    const userData = JSON.parse(localStorage.getItem('user'))
    const userEmail = userData.email
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
            if (result.jobs.length === 0) {
                allJobs = 'No Jobs Yet!'
            } else {
                allJobs = result.jobs
                setJobs(allJobs)
            }
        } catch (error) {
            console.log(error)
        }
    }


    function displayJobs() {
        return jobs.map(job =>
            <div>
                <div className="col-12 border-bottom mb-3">
                    <p className='fs-5 fw-bold'>{job.address} ----- <Link to={{ pathname: "/job-page", state: job.jobName }}>{job.jobName}</Link>  ----- {job.price}</p>
                </div>
            </div>)
    }

    return (
        <section class="projects-section bg-light" id="results">
            <div class="container px-4 px-lg-5" id="results-cont">
                <div class="row">
                    <div class="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div class=" text-lg-left">
                            <h1 class="mb-4 text-center">My Jobs</h1>
                        </div>
                        <div className="col-4 mb-4">
                            <a href="" className='btn btn-warning text-white fw-bold p-3'>Sort</a>
                        </div>
                        {displayJobs()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyJobs








