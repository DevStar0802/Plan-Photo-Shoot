import React from "react";

const JobMap = (jobsArray) => {


    function makeJobs() {
        let dude = ['jello', 'jillo']
        let newArray = dude.map(object => object.jobName)
        return (
            newArray = newArray.map(job => {
                <div>
                    <div className="col-12 border-bottom mb-3">
                        <p className='fs-5 fw-bold'>{job}</p>
                    </div>
                </div>
            }))
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
                        {makeJobs()}
                    </div>
                </div>
            </div>
        </section>
    )

};

export default JobMap;