import { Link } from 'react-router-dom';

function MyJobs() {
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
                        <div className="col-4 border-bottom mb-3">
                            <p>1/1/2023</p>
                            <Link to="/job-page">
                                <p className='fs-5 fw-bold'>Some Job</p>
                            </Link>
                        </div>
                        <div className="col-4 border-bottom mb-3">
                            <p>1/1/2023</p>
                            <p className='fs-5 fw-bold'>Some Job</p>
                        </div>
                        <div className="col-4 border-bottom mb-3">
                            <p>1/1/2023</p>
                            <p className='fs-5 fw-bold'>Some Job</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyJobs