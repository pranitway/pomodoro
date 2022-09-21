import React, { useEffect, useState } from "react";

const Pomodoro = () => {
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(10);
    // const [time, setTime] = useState([25, 0]);
    const [start, setStart] = useState(false);
    // const [pause, setPause] = useState(false);
    // const [inter, setInter] = useState(null);
    const [msg, setMsg] = useState(false);

    useEffect(() => {
        if (start) {
            const intervalTimer = setInterval(() => {
                // let min = time[0];
                // let sec = time[1];
                // function getNewTime() {
                //     if (min > 0 && sec === 0) {
                //         return [--min, sec + 59];
                //     } else if (sec >= 1) {
                //         return [min, --sec];
                //     }
                // }
                // let newTime = getNewTime();
                // setTime(getNewTime);

                if (intervalTimer) {
                    clearInterval(intervalTimer);
                }

                if (sec === 0) {
                    if (min !== 0) {
                        setSec(59);
                        setMin(min - 1);
                    } else {
                        let mins = msg ? 24 : 4;
                        let secs = 59;

                        setSec(secs);
                        setMin(mins);
                        setMsg(!msg);
                    }
                } else {
                    setSec(sec - 1);
                }
            }, 1000);

            console.log("useEffect Executed...");

            // setInter(interval);
            // return () => {
            //     if (intervalTimer) {
            //         clearInterval(intervalTimer);
            //     }
            // };
        }
    }, [sec, start]);
    // const [time, setTime] = useState([25, 0]);

    // useEffect(() => {
    //     setInterval(() => {
    //         // let min = time[0];
    //         // let sec = time[1];
    //         setTime((time) => {
    //             let min = time[0];
    //             let sec = time[1];
    //             if (min > 0 && sec === 0) {
    //                 console.log("executed 1st");
    //                 return [min - 1, sec + 59];
    //             } else if (sec > 1) {
    //                 console.log("executed 2nd");
    //                 return [min, sec - 1];
    //             }
    //         });
    //         // console.log("executed 1st");
    //     }, 1000);
    // }, [time]);
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
                                <strong>{}</strong>
                            </h4>
                        </div>
                        <div className="row mb-5">
                            <h1 style={{ fontSize: "90px" }}>
                                <strong>{`${min} : ${sec}`}</strong>
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
                                        class="btn btn-primary"
                                        onClick={() => {
                                            setStart(true);
                                            // startTimer();
                                        }}
                                    >
                                        Start
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        // onClick={() => {
                                        //     clearInterval(inter);
                                        // }}
                                    >
                                        Pause
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
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
