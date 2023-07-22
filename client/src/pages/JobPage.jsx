import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useUserContext } from '../utils/UserContext';
import { changeDate } from '../utils/Date'

//TODO use location state to pull off jobnae parameter
function JobPage() {
    const [jobs, setJobs] = useState({})
    //pull off the jobname from the location as state.jobber
    let { state } = useLocation();
    const urlJob = state.jobber;
    console.log('This is the state pulled off the location and passed into the fetch request: ', urlJob)


    useEffect(() => {
        fetchJobData(urlJob);
    }, []);

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
                jobData.date = changeDate(jobData.date)
                setJobs(jobData)
                console.log('this is jobs now:', jobs)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className="projects-section bg-light" id="results">
            <div className="container px-4 px-lg-5" id="results-cont">
                <div className="row">
                    <div className="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div className=" text-lg-left">
                            <h1 className="mb-4 text-center">{jobs.jobName || "jobs"}</h1>
                            <div className="card mb-4" id="">
                                <div className="card-body">
                                    <p id=""><a href="" className="btn"> {jobs.date} </a></p>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <div className="card-body">
                                    <p id=""><a href="" className="btn"> {jobs.custName} </a></p>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <div className="card-body">
                                    <p id=""><a href="" className="btn"> {jobs.address} </a></p>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <div className="card-body">
                                    <p id=""><a href="" className="btn"> {jobs.sqFt} </a></p>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <div className="card-body">
                                    <p id=""><a href="" className="btn"> {jobs.milesFromAir} </a></p>
                                </div>
                            </div>
                            <div className="card mb-4" id="">
                                <div className="card-body">
                                    <p id=""><a href="" className="btn">{jobs.notes} </a></p>
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