import React from "react";

function JobListItem({ job }) {
    return (
        <>
            <div>
                <ul>
                    <li>
                        {job.title}
                        <ul>
                            <li>{job.type}</li>
                            <li>{job.description}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default JobListItem;
