import React, { useState, useEffect } from "react";
import "./Timer.css"; // Import the CSS file

const Timer = () => {
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [inputMinutes, setInputMinutes] = useState("");

    useEffect(() => {
        let timer;
        if (isRunning && !isPaused && remainingSeconds > 0) {
            timer = setInterval(() => {
                setRemainingSeconds((prev) => prev - 1);
            }, 1000);
        } else if (remainingSeconds === 0 && isRunning) {
            setIsRunning(false);
            alert("Time's up!");
        }
        return () => clearInterval(timer);
    }, [isRunning, isPaused, remainingSeconds]);

    const handleStart = () => {
        const minutes = parseInt(inputMinutes);
        if (isNaN(minutes) || minutes <= 0) {
            alert("Please enter a valid number of minutes.");
            return;
        }
        const seconds = minutes * 60;
        setTotalSeconds(seconds);
        setRemainingSeconds(seconds);
        setIsRunning(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused((prev) => !prev);
    };

    const handleReset = () => {
        setIsRunning(false);
        setIsPaused(false);
        setTotalSeconds(0);
        setRemainingSeconds(0);
        setInputMinutes("");
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    const progressPercentage = () => {
        return totalSeconds > 0 ? (remainingSeconds / totalSeconds) * 100 : 0;
    };

    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">Countdown Timer</h1>
            <div className="mb-3">
                <input
                    type="number"
                    id="minutes-input"
                    className="form-control d-inline w-auto me-2"
                    placeholder="Minutes"
                    value={inputMinutes}
                    onChange={(e) => setInputMinutes(e.target.value)}
                    disabled={isRunning && !isPaused}
                />
                <button
                    id="start-btn"
                    className="btn btn-primary"
                    onClick={handleStart}
                    disabled={isRunning && !isPaused}
                >
                    Start
                </button>
            </div>
            <h2
                id="countdown-display"
                className={`display-4 ${remainingSeconds <= 10
                        ? "critical"
                        : remainingSeconds <= 30
                            ? "warning"
                            : ""
                    }`}
            >
                {formatTime(remainingSeconds)}
            </h2>
            <div className="mt-3">
                <button
                    id="pause-btn"
                    className="btn btn-warning me-2"
                    onClick={handlePause}
                    disabled={!isRunning}
                >
                    {isPaused ? "Resume" : "Pause"}
                </button>
                <button
                    id="reset-btn"
                    className="btn btn-danger"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
            <div className="progress mt-4" style={{ height: "10px" }}>
                <div
                    id="progress-bar"
                    className="progress-bar"
                    role="progressbar"
                    style={{
                        width: `${progressPercentage()}%`,
                        backgroundColor:
                            remainingSeconds <= 10
                                ? "#dc3545"
                                : remainingSeconds <= 30
                                    ? "#ffc107"
                                    : "#28a745",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Timer;