import { useState } from 'react'
import Footer from '../components/Footer'


function formSection() {
    return (
        <section className="about-section  pb-5" id="photo-form">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <form id="p-form">
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Enter Property Address</label>
                                <input type="text" className="form-control" id="address" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="sqft" className="form-label">Enter Square Footage</label>
                                <input type="number" className="form-control" id="sqft" min="1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="airport" className="form-label">Enter Miles From Airport</label>
                                <input type="number" className="form-control" id="airport" min="0" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input " id="hdr" />
                                <label className="form-check-label" htmlFor="hdr">Are you taking HDR photos?</label>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input " id="drone" />
                                <label className="form-check-label" htmlFor="drone">Are you taking drone photos?</label>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="tour" />
                                <label className="form-check-label" htmlFor="tour">Are you capturing a virtual tour?</label>
                            </div>
                            <div className="text-center">
                                <button type="submit" id="btn-submit" className="btn btn-warning text-center">Submit</button>
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