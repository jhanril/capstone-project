import React from "react";

function JobListItem({ job }) {
    return (
        <>
            <div className="col-md-4">
                <div className="card p-3 mb-2">
                    <div className="my-5 mx-3">
                        <h3 className="heading">{job.company_name}</h3>
                        <br />
                        <h5>{job.job_type}</h5>
                        <div className="mt-5">
                            <div className="d-flex row  mb-0">
                                <div className="col ">
                                    <p className="text-muted">
                                        {" "}
                                        {job.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer border-0 text-center mx-auto ">
                        <h5 className="footer">
                            {" "}
                            <a href="" className="text-decoration-none">
                                {" "}
                                VIEW JOB
                            </a>
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobListItem;
