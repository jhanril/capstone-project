import React from "react";
import JobListItem from "../components/JobListItem";
import { useStateContext } from "../contexts/ContextProvider";

function Jobs() {
    const { jobs } = useStateContext();
    console.log(jobs);
    return (
        <>
            <div>
                {jobs.map((job) => (
                    <JobListItem job={job} key={job.id} />
                ))}
            </div>
        </>
    );
}

export default Jobs;
