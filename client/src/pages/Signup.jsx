import { Link } from 'react-router-dom';
import { useState } from 'react'


function Signup() {

    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [firstName, setFName] = useState()
    const [lastName, setLname] = useState()

    function setPassword(e) {
        setPass(e.target.value)
    }

    function setMail(e) {
        setEmail(e.target.value)
    }

    return (
        <section class="projects-section bg-light" id="results">
            <div class="container px-4 px-lg-5" id="results-cont">
                <div class="row">
                    <div class="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div class=" text-lg-left">
                            <h1 class="mb-4 text-center">Sign Up</h1>
                            <div class="card mb-4" id="">
                                <h5 class="card-header fw-bold">Username</h5>
                                <input type="text" placeholder='What is your username?' onChange={setMail(e)} />
                            </div>
                            <div class="card mb-4" id="">
                                <h5 class="card-header fw-bold">Password</h5>
                                <input type="text" placeholder='What is your password?' onChange={setPassword(e)} />
                            </div>
                            <div class="card mb-4" id="">
                                <h5 class="card-header fw-bold">First Name</h5>
                                <input type="text" placeholder='What is your first name?' onChange={setFName(e)} />
                            </div>
                            <div class="card mb-4" id="">
                                <h5 class="card-header fw-bold">Last Name</h5>
                                <input type="text" placeholder='What is your last name?' onChange={setLname(e)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup