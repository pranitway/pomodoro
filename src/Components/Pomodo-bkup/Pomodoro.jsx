import React, { useEffect, useState } from "react";

const Pomodoro = () => {
    // const [min, setMin] = useState(25);
    // const [sec, setSec] = useState(0);
    const [time, setTime] = useState([25, 0]);
    const [start, setStart] = useState(false);
    const [pause, setPause] = useState(false);
    // const [inter, setInter] = useState(null);
    useEffect(() => {
        if (start && !pause) {
            const interval = setInterval(() => {
                var min = time[0];
                var sec = time[1];
                if (sec == 0) {
                    min++;
                    sec = 59;
                } else {
                    sec--;
                }
                setTime([min, sec]);
                console.log("hey");
                console.log("hello");
            }, 1000);
            // setInter(interval);
            // return () => {
            //     clearInterval(interval);
            // };
        }
    }, [start]);
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
                            <h1 style={{ fontSize: "90px" }}>
                                <strong>{`${time[0]} : ${time[1]}`}</strong>
                            </h1>
                        </div>

                        <div className="row">
                            <div className="d-flex justify-content-center ">
                                <div
                                    class="btn-group"
                                    role="group"
                                    aria-label="Basic example"
                                >
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        onClick={() => {
                                            setStart(true);
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
