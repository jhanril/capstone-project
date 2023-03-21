import React from "react";

function JobListTable({ job }) {
    const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const timeOptions = {
        hour: "numeric",
        minute: "2-digit",
    };
    const formattedDate = new Date(job.created_at).toLocaleString(
        "en-US",
        dateOptions
    );
    const formattedTime = new Date(job.created_at).toLocaleString(
        "en-US",
        timeOptions
    );
    const dateAndTime = `${formattedDate} : ${formattedTime.toLowerCase()}`;
    return (
        <>
            <tr className="bg-blue">
                <td className="pt-3">
                    <div className="pl-lg-5 pl-md-3 pl-1 name">
                        {job.company_name}
                    </div>
                </td>
                <td className="pt-3 mt-1">{job.job_type}</td>
                <td className="pt-3">{dateAndTime}</td>
                <td className="pt-3">
                    {job.status ? (
                        <span className="fa fa-check pl-3"></span>
                    ) : (
                        <span className="fa fa-x pl-3"></span>
                    )}
                </td>
                <td className="pt-3">
                    <span className="fa fa-ellipsis-v btn"></span>
                </td>
            </tr>
            <tr id="spacing-row">
                <td></td>
            </tr>
        </>
    );
}

export default JobListTable;
