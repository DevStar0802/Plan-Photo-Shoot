import { useState } from 'react'
import Footer from '../components/Footer'


function formSection() {
    return (
        <section class="about-section  pb-5" id="photo-form">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8">
                        <form id="p-form">
                            <div class="mb-3">
                                <label for="address" class="form-label">Enter Property Address</label>
                                <input type="text" class="form-control" id="address" />
                            </div>
                            <div class="mb-3">
                                <label for="sqft" class="form-label">Enter Square Footage</label>
                                <input type="number" class="form-control" id="sqft" min="1" />
                            </div>
                            <div class="mb-3">
                                <label for="airport" class="form-label">Enter Miles From Airport</label>
                                <input type="number" class="form-control" id="airport" min="0" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input " id="hdr" />
                                <label class="form-check-label" for="hdr">Are you taking HDR photos?</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input " id="drone" />
                                <label class="form-check-label" for="drone">Are you taking drone photos?</label>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="tour" />
                                <label class="form-check-label" for="tour">Are you capturing a virtual tour?</label>
                            </div>
                            <div class="text-center">
                                <button type="submit" id="btn-submit" class="btn btn-warning text-center">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

function MainPage({ handlePageChange }) {
    return (
        // <!-- Landing Page--> 
        <>
            <header className="masthead" id="masthead">
                <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="bg">
                        <div className="d-flex justify-content-center">
                            <div className="text-center">
                                <h1 className="mx-auto my-0 text-uppercase">Plan Your Next Photo Shoot</h1>
                                <h2 className="text-white-50 mx-auto mt-2 mb-5">Enter your photo shoot details below...</h2>
                                <a className="btn btn-warning" href="#photo-form">Get Started</a>
                            </div>
                        </div>
                        <div className="fog">
                            <img src="public/assets/img/fog1.png" style={{ "--i": 8 }} />
                            {/* <img src="public/assets/img/fog2.png" style={{ "--i": 8 }} />
                        <img src="public/assets/img/fog3.png" style={{ "--i": 8 }} /> */}
                        </div>
                    </div>
                </div>
            </header>
            {formSection()}
        </>
    )
}

export default MainPage;