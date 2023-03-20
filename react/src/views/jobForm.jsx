import { Link } from "react-router-dom";
import { useState } from "react";
import axiosClient from "../axios";
import "../assets/employer.css";
import { useStateContext } from "../contexts/ContextProvider";

function JobForm() {
    const { currentUser } = useStateContext();

    const [userId, setUserId] = useState(currentUser.id);
    const [status, setStatus] = useState(1);
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [jobType, setJobType] = useState("");
    const [location, setLocation] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setError("");

        // use axiosClient to make the post request
        axiosClient
            .post("/jobs/create", {
                company_name: companyName,
                user_id: userId,
                status,
                email,
                phone,
                job_type: jobType,
                location,
                description: jobDescription,
            })
            .then(({ data }) => {
                console.log(data);
                // handle successful response
            })
            .catch((error) => {
                console.error(error);
                setError("An error occurred while submitting the form.");
            });
    };
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

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="row">
                <div className="col-xl-12">
                    <div className="card mb-4">
                        <div className="card-header">Job Details</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="hidden"
                                    name="user_id"
                                    value={userId}
                                />
                                <input
                                    type="hidden"
                                    name="status"
                                    value={status}
                                />
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
                                        value={companyName}
                                        onChange={(ev) =>
                                            setCompanyName(ev.target.value)
                                        }
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
                                            value={email}
                                            onChange={(ev) =>
                                                setEmail(ev.target.value)
                                            }
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
                                            value={phone}
                                            onChange={(ev) =>
                                                setPhone(ev.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="select_type"
                                        >
                                            Job Type
                                        </label>
                                        <select
                                            name="select_type"
                                            className="form-control"
                                            id="select_type"
                                            value={jobType}
                                            onChange={(ev) =>
                                                setJobType(ev.target.value)
                                            }
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
                                            name="location"
                                            type="text"
                                            placeholder="Enter your location"
                                            value={location}
                                            onChange={(ev) =>
                                                setLocation(ev.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3 edit">
                                    <label
                                        htmlFor="jobDescription"
                                        className="small mb-1"
                                    >
                                        Job Description
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="jobDescription"
                                        name="description"
                                        rows="5"
                                        required
                                        value={jobDescription}
                                        onChange={(ev) =>
                                            setJobDescription(ev.target.value)
                                        }
                                    ></textarea>
                                </div>

                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Create Job
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
