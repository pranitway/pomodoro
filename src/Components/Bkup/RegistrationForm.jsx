import React from "react";
import { NavLink } from "react-router-dom";

const RegistrationForm = () => {
    return (
        <React.Fragment>
            <div className="text-center">
                <h3>Registration Form</h3>
            </div>
            <form onSubmit="">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <div className="mt-3">
                    <button type="submit" class="btn btn-success">
                        Register
                    </button>
                    <div className="d-flex mt-3">
                        <NavLink to="/login" className="ms-2">
                            <h5>
                                <i class="fa-solid fa-arrow-left"></i>
                            </h5>
                        </NavLink>
                        <p className="ms-2">Go Back To Login</p>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
};

export default RegistrationForm;
