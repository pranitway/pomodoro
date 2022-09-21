import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Pomodoro from "./Pomodoro";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Home = () => {
    return (
        <div className="row justify-content-center ">
            <div className="col col-lg-6 col-md-6">
                <div className="card bg-light">
                    <div className="card-header d-flex justify-content-between">
                        <h3>Pomodoro</h3>
                        <div className="">
                            <NavLink to="/" className="me-3">
                                <button className="btn btn-light">Home</button>
                            </NavLink>
                            <NavLink to="/login">
                                <button className="btn btn-dark">Login</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="card-body">
                        <Routes>
                            <Route
                                path="/login"
                                element={<LoginForm></LoginForm>}
                            ></Route>
                            <Route
                                path="/"
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
