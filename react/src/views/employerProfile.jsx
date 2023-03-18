import "../assets/employer.css";

function EmployerProfile() {
    return (
        <div class="container-xl px-4 mt-4">
            <hr class="mt-0 mb-4" />
            <div class="row">
                <div class="col-xl-4">
                    <div class="card mb-4 mb-xl-0">
                        <div class="card-header">Profile Picture</div>
                        <div class="card-body text-center">
                            <img
                                class="img-account-profile rounded-circle mb-2"
                                src="http://bootdey.com/img/Content/avatar/avatar1.png"
                                alt=""
                            />

                            <div class="small font-italic text-muted mb-4">
                                JPG or PNG no larger than 5 MB
                            </div>

                            <button class="btn btn-primary" type="button">
                                Upload new image
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="card mb-4">
                        <div class="card-header">Account Details</div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label class="small mb-1" for="companyName">
                                        Company Name
                                    </label>
                                    <input
                                        class="form-control"
                                        id="companyName"
                                        type="text"
                                        placeholder="CompanyName"
                                        value=""
                                    />
                                </div>

                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label
                                            class="small mb-1"
                                            for="inputEmailAddress"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            class="form-control"
                                            id="inputEmailAddress"
                                            type="email"
                                            placeholder="Enter your email address"
                                            value=""
                                        />
                                    </div>

                                    <div class="col-md-6">
                                        <label
                                            class="small mb-1"
                                            for="inputPhone"
                                        >
                                            Phone number
                                        </label>
                                        <input
                                            class="form-control"
                                            id="inputPhone"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            value=""
                                        />
                                    </div>
                                </div>

                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label
                                            class="small mb-1"
                                            for="inputLocation"
                                        >
                                            Specialization
                                        </label>
                                        <select
                                            name="select_box"
                                            class="form-control"
                                            id="select_box"
                                        >
                                            <option value="">
                                                Select Specialization
                                            </option>
                                            <option value="Web Development">
                                                Web Development
                                            </option>
                                            <option value="App Development">
                                                App Development
                                            </option>
                                            <option value="IT Securities">
                                                IT Securities
                                            </option>
                                            <option value="General IT Services">
                                                General IT Services
                                            </option>
                                        </select>
                                    </div>

                                    <div class="col-md-6">
                                        <label
                                            class="small mb-1"
                                            for="inputLocation"
                                        >
                                            Location
                                        </label>
                                        <input
                                            class="form-control"
                                            id="inputLocation"
                                            type="text"
                                            placeholder="Enter your location"
                                            value=""
                                        />
                                    </div>
                                </div>

                                <div class="mb-3 edit">
                                    <label for="companyInfo" class="small mb-1">
                                        Company Information
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="companyInfo"
                                        rows="3"
                                        placeholder="Enter Company Information"
                                    />
                                </div>
                                <div class="card-header">
                                    Social Media Links
                                </div>
                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label
                                            class="small mb-1"
                                            for="inputPhone"
                                        >
                                            Facebook
                                        </label>
                                        <input
                                            class="form-control"
                                            id="inputPhone"
                                            type="text"
                                            placeholder="Facebook Link"
                                            value=""
                                        />
                                    </div>

                                    <div class="col-md-6">
                                        <label
                                            class="small mb-1"
                                            for="inputBirthday"
                                        >
                                            Instagram
                                        </label>
                                        <input
                                            class="form-control"
                                            id="inputBirthday"
                                            type="text"
                                            name="text"
                                            placeholder="Instagram Link"
                                            value=""
                                        />
                                    </div>
                                </div>

                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label
                                            class="small mb-1"
                                            for="inputPhone"
                                        >
                                            LinkedIn
                                        </label>
                                        <input
                                            class="form-control"
                                            id="inputPhone"
                                            type="text"
                                            placeholder="LinkedIn Link"
                                            value=""
                                        />
                                    </div>

                                    <div class="col-md-6">
                                        <label
                                            class="small mb-1"
                                            for="inputBirthday"
                                        >
                                            Youtube
                                        </label>
                                        <input
                                            class="form-control"
                                            id="inputBirthday"
                                            type="text"
                                            name="text"
                                            placeholder="Youtube Link"
                                            value=""
                                        />
                                    </div>
                                </div>

                                <button class="btn btn-primary" type="button">
                                    Save changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployerProfile;
