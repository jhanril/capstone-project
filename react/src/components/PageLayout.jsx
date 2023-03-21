import { Link } from "react-router-dom";
import Events from "../views/events";
import Jobs from "../views/jobs";

function PageLayout() {
    const currentPath = window.location.pathname;

    return (
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
            {currentPath === "/jobs" ? (
                <Jobs />
            ) : currentPath === "/events" ? (
                <Events />
            ) : null}
        </div>
    );
}

export default PageLayout;
