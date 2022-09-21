import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    // We want to run this useEffect only once when component mounts
    useEffect(() => {
        if (user !== null) {
            console.log("Executed", null);
            navigate("/pomodoro");
        }
    }, [user]);

    return (
        <React.Fragment>
            <div className="text-center">
                <h3>Login With Google</h3>
            </div>
            <div className="d-flex justify-content-center pt-5 pb-5">
                <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
            </div>
        </React.Fragment>
    );
};

export default LoginForm;
