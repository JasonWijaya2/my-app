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
        <div style={{ textAlign: "center", color: "#333" }}>
            <h1>Countdown Timer</h1>
            <div>
                <input
                    type="number"
                    id="minutes-input"
                    placeholder="Minutes"
                    value={inputMinutes}
                    onChange={(e) => setInputMinutes(e.target.value)}
                    disabled={isRunning && !isPaused}
                />
                <button
                    id="start-btn"
                    onClick={handleStart}
                    disabled={isRunning && !isPaused}
                >
                    Start
                </button>
            </div>
            <h2
                id="countdown-display"
                className={
                    remainingSeconds <= 10
                        ? "critical"
                        : remainingSeconds <= 30
                        ? "warning"
                        : ""
                }
                style={{ fontSize: "48px" }}
            >
                {formatTime(remainingSeconds)}
            </h2>
            <div>
                <button
                    id="pause-btn"
                    onClick={handlePause}
                    disabled={!isRunning}
                >
                    {isPaused ? "Resume" : "Pause"}
                </button>
                <button id="reset-btn" onClick={handleReset}>
                    Reset
                </button>
            </div>
            <div style={{ marginTop: "20px" }}>
                <div
                    style={{
                        height: "10px",
                        width: "100%",
                        backgroundColor: "#ddd",
                        borderRadius: "5px",
                        overflow: "hidden",
                    }}
                >
                    <div
                        id="progress-bar"
                        className="progress-bar"
                        style={{
                            height: "100%",
                            width: `${progressPercentage()}%`,
                            backgroundColor:
                                remainingSeconds <= 10
                                    ? "#dc3545"
                                    : remainingSeconds <= 30
                                    ? "#bd2130"
                                    : "green",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Timer;