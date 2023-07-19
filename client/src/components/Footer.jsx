import '../App.css'

function Footer({ handlePageChange }) {
    return (
        <div className="container py-5 mt-5">
            <div className="row justify-content-center pt-5">
                <div className="col-sm-12 col-md-5 pt-5">
                    <p className="ps-3 white-text fs-5 text-center">Arizona Drone Photography 2023</p>
                </div>
                {/* <div className="col-sm-12 col-md-3  justify-content-center text-center pt-5" >
                    <a className="ps-3 green-text fs-5 text-center" href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</a>
                </div> */}
            </div>
        </div>
    )
}

export default Footer;