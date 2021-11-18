import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Goals from './Goals.jsx'

function Timer() {
    const [seconds, setSeconds] = useState(1500)
    const [start, setStart] = useState(false)

    function click() {
        setStart(!start);
    }

    function reset() {
        setSeconds(1500);
        setStart(false);
    }

    useEffect(() => {
        let interval = null;
        if (start) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000)
        } else if (!start && seconds !== 1500) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        }
    }, [start, seconds])

    const navigate = useNavigate()

    return (
        <div className="timerBox">
            <h1 className="focusHeader">🎧 Time to Focus! 🎧</h1>
            <div className="timer">
                {seconds}
            </div>
            <p className="description">(1500 === 25 Minutes)</p>
            <button className="signoutbtn" onClick={() => navigate(-1)}>Sign Out</button>
            <div className="timerbtns">
                <button className="startbtn" onClick={click}>START </button>
                <button className="resetbtn" onClick={reset}>RESET</button>
            </div>
            <Goals />
        </div>
    )
}

export default Timer

