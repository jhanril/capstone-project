import { Link } from "react-router-dom";
import "../assets/employer.css";

function JobForm() {
    return (
        <div className="container-xl px-4 mt-4">
            <div className="mt-5 mb-3">
                <div className="add-items d-flex justify-content-between">
                    <h4>Create new job</h4>
                    <Link
                        to="/jobs"
                        className="add btn btn-danger font-weight-bold todo-list-add-btn"
                    >
                        cancel
                    </Link>
                </div>
            </div>
            <hr className="mt-0 mb-4" />
            <div className="row">
                <div className="col-xl-12">
                    <div className="card mb-4">
                        <div className="card-header">Account Details</div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        className="small mb-1"
                                        htmlFor="companyName"
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        className="form-control"
                                        id="companyName"
                                        type="text"
                                        placeholder="CompanyName"
                                    />
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputEmailAddress"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputEmailAddress"
                                            type="email"
                                            placeholder="Enter your email address"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputPhone"
                                        >
                                            Phone number
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputPhone"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputLocation"
                                        >
                                            Job Type
                                        </label>
                                        <select
                                            name="select_box"
                                            className="form-control"
                                            id="select_box"
                                        >
                                            <option>Select type</option>
                                            <option value="Full-time">
                                                Full-time
                                            </option>
                                            <option value="Part-time">
                                                Part-time
                                            </option>
                                            <option value="Intern">
                                                Intern
                                            </option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputLocation"
                                        >
                                            Location
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputLocation"
                                            type="text"
                                            placeholder="Enter your location"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3 edit">
                                    <label
                                        htmlFor="companyInfo"
                                        className="small mb-1"
                                    >
                                        Company Information
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="companyInfo"
                                        rows="5"
                                    ></textarea>
                                </div>

                                <button
                                    className="btn btn-primary"
                                    type="button"
                                >
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

export default JobForm;
