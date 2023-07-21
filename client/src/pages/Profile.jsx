import { Link } from 'react-router-dom';

function checkName(user) {
    return user ? user : ""
}

function checkUsername(user) {
    return user ? user : ""
}


function Profile() {
    const userData = JSON.parse(localStorage.getItem('user'))
    const userName = userData.firstName

    return (
        <section class="projects-section bg-light" id="results">
            <div class="container px-4 px-lg-5" id="results-cont">
                <div class="row">
                    <div class="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div class=" text-lg-left">
                            <h1 class="mb-4 text-center">Hi, {checkName(userName)}</h1>
                            <div class="card mb-4" id="">
                                <h5 class="card-header fw-bold">Email</h5>
                                <div class="card-body">
                                    <p id="">{checkUsername(userData.email)}</p>
                                </div>
                            </div>
                            <div class="card mb-4" id="">
                                <h5 class="card-header fw-bold">Password</h5>
                                <div class="card-body">
                                    <p id=""> ************</p>
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

export default Profile