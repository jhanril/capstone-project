import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Jobs from "../views/jobs";

function DefaultLayout() {
    const { currentUser, userToken } = useStateContext();

    if (!userToken) {
        return <Navigate to="login" />;
    }

    console.log(currentUser);

    return (
        <>
            <div>userToken: {userToken}</div> <br />
            <div>
                Name: {`${currentUser.firstname} ${currentUser.lastname}`}
            </div>{" "}
            <br />
            <div>
                jobs: <Jobs />{" "}
            </div>{" "}
            <br />
            <Outlet />
        </>
    );
}

export default DefaultLayout;
