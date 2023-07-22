import { useFormik } from 'formik';


function CreateJob() {


    const formik = useFormik({
        initialValues: {
            jobName: '',
            custName: '',
            address: '',
            sqFt: null,
            milesFromAir: null,
            price: null,
            notes: '',
            photos: false,
            drone: false,
            tour: false
        },
        onSubmit: async values => {
            try {
                const response = await fetch("/api/job", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                })

                const result = await response.json()
                console.log(result.message)
                if (result.message === 'Logged in!') {
                    logInUser(result.user)
                    localStorage.setItem('session', JSON.stringify(result.the_session))
                    localStorage.setItem('user', JSON.stringify(result.user))
                    navigate("/profile")
                }
            } catch (error) {
                console.log(error)
            }

        },
    });


    return (
        <section class="projects-section bg-light" id="results">
            <div class="container px-4 px-lg-5" id="results-cont">
                <div class="row">
                    <div class="col-sm-10 col-lg-6 mx-auto mt-4">
                        <div class=" text-lg-left">
                            <h1 class="mb-4 text-center">Create New Job </h1>
                            <form id="p-form">
                                <div class="mb-3">
                                    <label for="jobName" class="form-label text-dark">Job Name</label>
                                    <input type="text" class="form-control" id="jobName" />
                                </div>
                                <div class="mb-3">
                                    <label for="custName" class="form-label text-dark">Customer Name</label>
                                    <input type="text" class="form-control" id="custName" />
                                </div>
                                <div class="mb-3">
                                    <label for="address" class="form-label text-dark">Property Address</label>
                                    <input type="text" class="form-control" id="address" />
                                </div>
                                <div class="mb-3">
                                    <label for="sqft" class="form-label text-dark">Square Footage</label>
                                    <input type="number" class="form-control" id="sqft" min="1" />
                                </div>
                                <div class="mb-3">
                                    <label for="airport" class="form-label text-dark">Miles From Airport</label>
                                    <input type="number" class="form-control" id="airport" min="0" />
                                </div>
                                <div class="mb-3">
                                    <label for="price" class="form-label text-dark">$ Price</label>
                                    <input type="number" class="form-control" id="price" min="0" />
                                </div>
                                <div class="mb-3">
                                    <label for="notes" class="form-label text-dark">Notes</label>
                                    <input type="number" class="form-control" id="notes" min="0" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input  " id="hdr" />
                                    <label class="form-check-label text-dark" for="hdr">Are you taking HDR photos?</label>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input " id="drone" />
                                    <label class="form-check-label text-dark" for="drone">Are you taking drone
                                        photos?</label>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="tour" />
                                    <label class="form-check-label text-dark" for="tour">Are you capturing a virtual
                                        tour?</label>
                                </div>
                                <div class="text-center">
                                    <button type="submit" id="btn-submit"
                                        class="btn btn-warning text-center">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateJob