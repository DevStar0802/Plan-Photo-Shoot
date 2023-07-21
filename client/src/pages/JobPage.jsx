import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useUserContext } from '../utils/UserContext';

//TODO use location state to pull off jobnae parameter

async function fetchJobData(jobName) {
    try {
        const response = await fetch("/api/job/focus", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                jobName: jobName
            }),
        })
        const jobData = await response.json()
        console.log(result)
        if (jobData.length === 0) {
            jobData = 'No Data!'
        } else {
            setJobs(jobData)
        }
    } catch (error) {
        console.log(error)
    }
}



// function jobName(jobName) {
//     return jobName ? jobName : "[ Job Name ]"
// }

function JobPage() {
    const location = useLocation();
    const urlJob = location.state;
    console.log(urlJob)
    const [jobs, setJobs] = useState()

    useEffect(() => {
        fetchJobData(urlJob);
    }, []);




    return (
        <section class="projects-section bg-light" id="results">
            <div class="container px-4 px-lg-5" id="results-cont">
                <div class="row">
                    <div class="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div class=" text-lg-left">
                            <h1 class="mb-4 text-center">{jobs.jobName || 'job name'} </h1>
                            <div class="card mb-4" id="">
                                <div class="card-body">
                                    <p id=""><a href="" class="btn"> {jobs.date} </a></p>
                                </div>
                            </div>
                            <div class="card mb-4" id="">
                                <div class="card-body">
                                    <p id=""><a href="" class="btn"> {jobs.custName} </a></p>
                                </div>
                            </div>
                            <div class="card mb-4" id="">
                                <div class="card-body">
                                    <p id=""><a href="" class="btn"> {jobs.address} </a></p>
                                </div>
                            </div>
                            <div class="card mb-4" id="">
                                <div class="card-body">
                                    <p id=""><a href="" class="btn"> {jobs.sqFt} </a></p>
                                </div>
                            </div>
                            <div class="card mb-4" id="">
                                <div class="card-body">
                                    <p id=""><a href="" class="btn"> {jobs.milesFromAir} </a></p>
                                </div>
                            </div>
                            <div class="card mb-4" id="">
                                <div class="card-body">
                                    <p id=""><a href="" class="btn"> {jobs.notes} </a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobPage