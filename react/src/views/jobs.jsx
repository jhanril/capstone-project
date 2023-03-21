import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios";
import JobListItem from "../components/JobListItem";
import { useStateContext } from "../contexts/ContextProvider";

function Jobs() {
    // const { jobs } = useStateContext();
    const [jobs, setJobs] = useState([]);
    // console.log(jobs);

    useEffect(() => {
        axiosClient.get("job").then(({ data }) => {
            setJobs(data.data);
            // console.log(jobs);
        });
    }, []);
    const limit = window.location.pathname !== "/jobs" ? 6 : undefined;

    return (
        <>
            <div className="row">
                {jobs.slice(0, limit).map((job) => (
                    <JobListItem job={job} key={job.id} />
                ))}
            </div>
        </>
    );
}

export default Jobs;
