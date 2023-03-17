import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Jobs from "../views/jobs";
import axiosClient from "../axios.js";
import Header from "../views/header";
import Footer from "../views/footer";

function DefaultLayout() {
    const { currentUser, setCurrentUser, userToken, setUserToken } =
        useStateContext();

    if (!userToken) {
        return <Navigate to="login" />;
    }

    const logout = (ev) => {
        ev.preventDefault();
        axiosClient.post("/logout").then((res) => {
            setCurrentUser({});
            setUserToken(null);
        });
    };
    console.log(currentUser);

    return (
        <>
            <Header />
            {/* <div>userToken: {userToken}</div> <br />
            <button onClick={(ev) => logout(ev)} className="btn">
                Logout
            </button>
            <div>
                Name: {`${currentUser.firstname} ${currentUser.lastname}`}
            </div>{" "}
            <br />
            <div>
                jobs: <Jobs />{" "}
            </div>{" "}
            <br /> */}

            <Footer />
        </>
    );
}

export default DefaultLayout;
