import React, { useState, useEffect } from 'react';

const data = [
    {
        name: "MARK AS COMPLETE",
        done: "false"
    },
    {
        name: "MARK AS COMPLETE",
        done: "false"
    },
    {
        name: "MARK AS COMPLETE",
        done: "false"
    },
    {
        name: "MARK AS COMPLETE",
        done: "false"
    },
    {
        name: "MARK AS COMPLETE",
        done: "false"
    }
];
const Goals = () => {
    // const [checked, setChecked] = useState(false);
    const [count, setCount] = useState(0);
    const [today, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000)
        return () => {
            clearInterval(timer);
        }
    }, [])
    const time = today.toLocaleTimeString('EN', { hour: 'numeric', hour12: true, minute: 'numeric' });
    const dayName = today.toLocaleString('EN', { weekday: 'long' });

    const list = data.map((item, index) => (
        <div key={index}>
            <input
                className="checkers"
                type="checkbox"
                name={item.name}
                onChange={e => handleCheckCount(e)}
            />
            <div className="medal">{item.name}</div>
        </div>
    ))

    function handleCheckCount(e) {
        const { checked, type } = e.target;
        if (type === "checkbox" && checked === true) {
            setCount(count + 1)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <div className="goals">
            <div className="dateHeader">
                <h1 id="dateString">{dayName}</h1>
                <div className="time">{time}</div>
            </div>
            <h2 className="sessions">Sessions Completed: {count}</h2>
            {/* <input type="checkbox" name="check" className="checkers" onChange={e => handleCheckCount(e)} />
            <input type="checkbox" name="check" className="checkers" onChange={e => handleCheckCount(e)} />
            <input type="checkbox" name="check" className="checkers" onChange={e => handleCheckCount(e)} />
            <input type="checkbox" name="check" className="checkers" onChange={e => handleCheckCount(e)} />
            <input type="checkbox" name="check" className="checkers" onChange={e => handleCheckCount(e)} /> */}
            {list}
        </div>
    )
}

export default Goals