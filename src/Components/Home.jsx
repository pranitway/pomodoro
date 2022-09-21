import React, { useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Pomodoro from "./Pomodoro";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { user, logOut } = UserAuth();
    // const { showDetails, setShowDetails } = useState(false);
    const navigate = useNavigate();
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (user == null) {
            navigate("/login");
        }
    }, [user]);
    return (
        <div
            className="row justify-content-center align-item-center vh-100 gx-0 "
            style={{ backgroundColor: "#76b9e5" }}
        >
            <div className="col col-lg-8 col-md-8 col-sm-12 align-content-center mt-5">
                {/* <div className="row align-items-center"> */}
                <div className="card bg-light">
                    <div className="card-header d-flex justify-content-between">
                        <h3>Pomodoro</h3>
                        <div className="d-flex">
                            {user?.displayName ? (
                                <div className="me-4 d-flex align-items-center">
                                    <div
                                        href=""
                                        data-mdb-toggle="tooltip"
                                        title={`${user.displayName}\n${user.email}`}
                                    >
                                        <i className="fa-solid fa-user fa-lg"></i>
                                    </div>
                                </div>
                            ) : null}

                            <div className="me-3">
                                <NavLink to="/pomodoro">
                                    <button className="btn btn-secondary">
                                        Home
                                    </button>
                                </NavLink>
                            </div>
                            <div>
                                {user?.displayName ? (
                                    <NavLink to="/login">
                                        <button
                                            className="btn btn-danger"
                                            onClick={handleSignOut}
                                        >
                                            Logout
                                        </button>
                                    </NavLink>
                                ) : (
                                    <NavLink to="/login">
                                        <button className="btn btn-dark">
                                            Login
                                        </button>
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <Routes>
                            <Route
                                path="/login"
                                element={<LoginForm></LoginForm>}
                            ></Route>
                            <Route
                                path="/pomodoro"
                                element={<Pomodoro></Pomodoro>}
                            ></Route>
                            <Route
                                path="/register"
                                element={<RegistrationForm></RegistrationForm>}
                            ></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
