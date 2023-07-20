import { Link } from 'react-router-dom';

function jobName(jobName) {
    return jobName ? jobName : "[ Job Name ]"
}

function JobPage() {
    return (
        <section class="projects-section bg-light" id="results">
            <div class="container px-4 px-lg-5" id="results-cont">
                <div class="row">
                    <div class="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div class=" text-lg-left">
                            <h1 class="mb-4 text-center">{jobName()}</h1>
                            <div class="card mb-4" id="">
                                <h5 class="card-header fw-bold">Username</h5>
                                <div class="card-body">
                                    <p id=""><a href="" class="btn"> [username] </a></p>
                                </div>
                            </div>
                            <div class="card mb-4" id="">
                                <h5 class="card-header fw-bold">Password</h5>
                                <div class="card-body">
                                    <p id=""><a href="" class="btn"> [password] </a></p>
                                </div>
                            </div>
                            <div class="card mb-4" id="">
                                <h5 class="card-header fw-bold">My Jobs</h5>
                                <div class="card-body">
                                    <Link className='text-decoration-none' to="/my-jobs">
                                        <p id=""><a href="" class="btn"> See Jobs </a></p>
                                    </Link>
                                </div>
                            </div>
                            <div class="card mb-4" id="">
                                <h5 class="card-header fw-bold">Earnings</h5>
                                <div class="card-body">
                                    <p id=""><a href="" class="btn"> See Earnings </a></p>
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