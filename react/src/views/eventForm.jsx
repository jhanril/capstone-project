import { Link } from "react-router-dom";

function EventForm() {
    return (
        <>
            <div className="container-xl px-4 mt-4">
                <div className="mt-5 mb-3">
                    <div className="add-items d-flex justify-content-between">
                        <h4>Create New Event/Training</h4>
                        <Link
                            to="/events"
                            className="add btn btn-danger font-weight-bold todo-list-add-btn"
                        >
                            Cancel
                        </Link>
                    </div>
                </div>
                <hr className="mt-0 mb-4" />

                <div className="row">
                    <div className="col-xl-12">
                        <div className="card mb-4">
                            <div className="card-header">Event Details</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="eventName"
                                            className="form-label"
                                        >
                                            Event Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="eventName"
                                            name="eventName"
                                            placeholder="Enter Event Name"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            htmlFor="eventDescription"
                                            className="form-label"
                                        >
                                            Event Description
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="eventDescription"
                                            name="eventDescription"
                                            rows="5"
                                            placeholder="Enter Event Description"
                                        ></textarea>
                                    </div>

                                    <div className="row gx-3 mb-3">
                                        <label
                                            htmlFor="inputLocation"
                                            className="form-label"
                                        >
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputLocation"
                                            name="location"
                                            placeholder="Enter Location"
                                        />
                                    </div>

                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-12">
                                            <label className="form-label">
                                                <h3>Date</h3>
                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label
                                                htmlFor="inputStartDate"
                                                className="form-label"
                                            >
                                                Start Date
                                            </label>
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                id="inputStartDate"
                                                name="startDate"
                                                placeholder="Enter Start Date"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label
                                                htmlFor="inputEndDate"
                                                className="form-label"
                                            >
                                                End Date
                                            </label>
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                id="inputEndDate"
                                                name="endDate"
                                                placeholder="Enter End Date"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Create
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventForm;
