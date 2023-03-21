import React, { useEffect, useState } from "react";

function EventListItem({ event }) {
    const [day, setDay] = useState("");

    useEffect(() => {
        const date = new Date(event.start_date);
        setDay(date.toLocaleDateString("en-US", { weekday: "long" }));
    }, [event.start_date]);

    function formatDate(dateString) {
        const dateObj = new Date(dateString);
        const month = dateObj.toLocaleString("default", { month: "long" });
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        return `${month} ${day}, ${year}`;
    }
    return (
        <div className="col-md-4">
            <div className="card p-3 mb-2">
                <div className="my-5 mx-3">
                    <h3 className="heading">{event.event_name}</h3>
                    <br />
                    <small>{event.location}</small>
                    <div className="my-5">
                        <div className="d-flex row  mb-0">
                            <div className="col ">
                                <p className="text-muted">
                                    {" "}
                                    {event.event_description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <p>
                        {formatDate(event.start_date)} :{" "}
                        <small className="text-muted">{day}</small>
                    </p>
                </div>
                <div className="card-footer border-0 text-center mx-auto ">
                    <h5 className="footer">
                        {" "}
                        <a href="" className="text-decoration-none">
                            {" "}
                            VIEW Event
                        </a>
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default EventListItem;
