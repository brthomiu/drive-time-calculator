/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./DriveTimeCalc.css";
import { useState } from "react";

// THIS CODE IS KINDA UGLY TO LOOK AT
// IT WAS MADE TO BE PRACTICAL, NOT PRETTY

const DriveTimeCalc = () => {
  const [isCalculated, setIsCalculated] = useState(false);
  const [startAmpm, setStartAmpm] = useState("AM");
  const [startHours, setStartHours] = useState(0);
  const [startMinutes, setStartMinutes] = useState(0);
  const [endAmpm, setEndAmpm] = useState("AM");
  const [endHours, setEndHours] = useState(0);
  const [endMinutes, setEndMinutes] = useState(0);
  const handleInput = (setTime: any, event: any) => {
    setTime(event.target.value);
  };

  const calculate = () => {
    const newHours = (hours: number, ampm: string) => {
      if (ampm == "PM" && hours != 12) {
        return +hours + 12;
      } else return +hours;
    };

    const difference =
      +newHours(endHours, endAmpm) * 60 +
      +endMinutes -
      (+newHours(startHours, startAmpm) * 60 + +startMinutes);
    return difference;
  };

  return (
    <div className="drivetime">
      <form autoComplete="off">
        <h1 className="title">Drive Time Calculator</h1>
        <h2>THIS APPLICATION HAS NOT BEEN TESTED</h2>
        <h2>DO NOT USE IT TO FILL OUT LEGAL FORMS</h2>

        <div className="entry">
          <h2>Start Time</h2>
          <div className="inputs">
            <div className="hours">
              <h2>Hour</h2>
              <input
                onChange={() => handleInput(setStartHours, window.event)}
              ></input>
            </div>
            <div className="minutes">
              <h2>Minutes</h2>
              <input
                onChange={() => handleInput(setStartMinutes, window.event)}
              ></input>
            </div>
            <div className="ampm">
              <h2>AM/PM</h2>
              <input
                onChange={() => handleInput(setStartAmpm, window.event)}
              ></input>
            </div>
          </div>
        </div>
        <div className="entry">
          <h2>End Time</h2>
          <div className="inputs">
            <div className="hours">
              <h2>Hour</h2>
              <input
                onChange={() => handleInput(setEndHours, window.event)}
              ></input>
            </div>
            <div className="minutes">
              <h2>Minutes</h2>
              <input
                onChange={() => handleInput(setEndMinutes, window.event)}
              ></input>
            </div>
            <div className="ampm">
              <h2>AM/PM</h2>
              <input
                onChange={() => handleInput(setEndAmpm, window.event)}
              ></input>
            </div>
          </div>
        </div>
      </form>
      <button onClick={() => setIsCalculated(true)}>
        Calculate Drive Time
      </button>
      {isCalculated && (
        <div>
          <h3>RESULT: {calculate()}</h3>
        </div>
      )}
    </div>
  );
};

export default DriveTimeCalc;
