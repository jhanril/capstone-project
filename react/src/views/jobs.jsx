import React from "react";
import { Link } from "react-router-dom";
import JobListItem from "../components/JobListItem";
import { useStateContext } from "../contexts/ContextProvider";

function Jobs() {
    const { jobs } = useStateContext();
    console.log(jobs);
    return (
        <>
            <div className="container mt-5 mb-3">
                <div className="mt-5 mb-3">
                    <div className="add-items d-flex justify-content-between">
                        <h4>Create new job</h4>
                        <Link
                            to="/jobs/create"
                            className="add btn btn-primary font-weight-bold todo-list-add-btn"
                        >
                            Add
                        </Link>
                    </div>
                </div>
                <hr className="mt-0 mb-4" />
                <div className="row">
                    {jobs.map((job) => (
                        <JobListItem job={job} key={job.id} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Jobs;
