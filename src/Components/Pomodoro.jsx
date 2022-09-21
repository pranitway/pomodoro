import React, { useEffect, useState } from "react";

const Pomodoro = () => {
    const [min, setMin] = useState(25);
    var [sec, setSec] = useState(0);
    const [start, setStart] = useState(false);
    const [inter, setInter] = useState(null);
    const [msg, setMsg] = useState(false);

    useEffect(() => {
        var secs = sec;
        var mins = min;
        var status = msg;
        if (start && !inter) {
            const intervalTimer = setInterval(() => {
                if (secs > 0) secs -= 1;
                if (secs === 0) {
                    if (mins === 0) {
                        if (status === false) {
                            mins = 5;
                            secs = 0;
                            status = true;
                            setMsg(status);
                        } else {
                            mins = 25;
                            secs = 0;
                            status = false;
                            setMsg(status);
                        }
                    } else {
                        mins -= 1;
                        secs = 59;
                    }
                }
                setSec(secs);
                setMin(mins);
            }, 1000);

            setInter(intervalTimer);
        }
    }, [start]);

    return (
        <React.Fragment>
            <div
                className="w-100 h-100 py-5"
                style={{
                    backgroundColor: "rgb(30, 26, 26)",
                    borderRadius: "10px",
                }}
            >
                <div className="row justify-content-center gy-3">
                    <div className="col col-md-12 col-lg-12 col-sm-12 text-light text-center">
                        <div className="row mb-5">
                            <h4>
                                <strong>
                                    {msg ? "Break Time" : "Work Time"}
                                </strong>
                            </h4>
                        </div>
                        <div className="row mb-5">
                            <h1 style={{ fontSize: "90px" }}>
                                <strong>{`${min > 9 ? min : "0" + min} : ${
                                    sec > 9 ? sec : "0" + sec
                                }`}</strong>
                            </h1>
                        </div>

                        <div className="row">
                            <div className="d-flex justify-content-center ">
                                <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Basic example"
                                >
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            setStart(true);
                                            // startTimer();
                                        }}
                                    >
                                        Start
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            clearInterval(inter);
                                            setInter(null);
                                            setStart(false);
                                        }}
                                    >
                                        Pause
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            clearInterval(inter);
                                            setInter(null);
                                            setStart(false);
                                            setSec(0);
                                            setMin(25);
                                        }}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Pomodoro;
