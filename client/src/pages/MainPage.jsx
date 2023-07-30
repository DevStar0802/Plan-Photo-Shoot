import { useEffect, } from 'react'
import { useNavigate, } from 'react-router-dom';
// import context
import { useUserContext } from '../utils/UserContext';
//formik forms
import { useFormik } from 'formik';

function MainPage() {

    // Set up our useReducer hook. Accepts two arguments - the reducer and an initial state
    const { setSearchForm } = useUserContext();

    //useNavigate for redirection
    const navigate = useNavigate();

    //pull in the search form data from local storage
    useEffect(() => {
        const savedSearchForm = JSON.parse(localStorage.getItem('searchForm'));
        if (savedSearchForm) {
            setSearchForm(savedSearchForm);
        }
    }, []);

    // set form values to local storage and to userContext
    const logFunction = function (values) {
        setSearchForm(values)
        localStorage.setItem('searchForm', JSON.stringify(values));
    }

    //fomik form handler
    const formik = useFormik({
        initialValues: {
            address: '',
            city: '',
            state: '',
            sqFt: 0,
            milesFromAir: 0,
            photos: false,
            drone: false,
            tour: false
        },
        onSubmit: async values => {
            try {
                console.log(values);
                logFunction(values)
                navigate("/results");
            } catch (error) {
                console.log(error);
            }
        }
    })


    //renders the form for initial search
    function formSection() {
        return (
            <section className="about-section  pb-5" id="photo-form">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8">
                            <form id="p-form" onSubmit={formik.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Enter Property Address</label>
                                    <input type="text" className="form-control" id="address" onChange={formik.handleChange} values={formik.values.address} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">Enter Property City</label>
                                    <input type="text" className="form-control" id="city" onChange={formik.handleChange} values={formik.values.address} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label">Enter Property State</label>
                                    <input type="text" className="form-control" id="state" required onChange={formik.handleChange} values={formik.values.address} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sqFt" className="form-label">Enter Square Footage</label>
                                    <input type="number" className="form-control" id="sqFt" min="1" onChange={formik.handleChange} values={formik.values.sqFt} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="milesFromAir" className="form-label">Enter Miles From Airport</label>
                                    <input type="number" className="form-control" id="milesFromAir" min="0" onChange={formik.handleChange} values={formik.values.milesFromAir} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input " id="hdr" />
                                    <label className="form-check-label" htmlFor="hdr" onChange={formik.handleChange} checked={formik.values.photos}>Are you taking HDR photos?</label>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input " id="drone" />
                                    <label className="form-check-label" htmlFor="drone" onChange={formik.handleChange} checked={formik.values.drone}>Are you taking drone photos?</label>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="tour" />
                                    <label className="form-check-label" htmlFor="tour" onChange={formik.handleChange} checked={formik.values.tour}>Are you capturing a virtual tour?</label>
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
            {/* Call the form import */}
            {formSection()}
        </>
    )
}



export default MainPage;