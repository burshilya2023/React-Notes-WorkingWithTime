import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { calcTime } from "../../hooks/useCoutDown";
const Wrapper = styled(motion.div)`
  .Timers {
    width: 180px;
    margin: 0 auto;
    text-align: center;
  }
  .display {
    margin-bottom: 20px;
  }
  .display span {
    font-size: 36px;
  }
  .buttons button:nth-child(2) {
    margin-left: 8px;
  }
  button {
    font-size: 16px;
    background-color: rgb(217, 60, 35);
    color: #fff;
    border-radius: 8px;
    border: none;
    padding: 6px 12px;
    cursor: pointer;
  }
  button:hover {
    background-color: rgb(173, 47, 28);
  }
  button:active {
    background-color: rgb(130, 35, 21);
  }
  button:focus {
    outline: 0;
  }
`;
//!not use. in proccess...
const TimeTracking = ({ id }) => {
  const [time, setTime] = React.useState(
    JSON.parse(localStorage.getItem(`timeTracking-${id}`)) || 0
  );
  const [timerOn, setTimerOn] = React.useState(false);
  React.useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn, time]);

  React.useEffect(() => {
    localStorage.setItem(`timeTracking-${id}`, JSON.stringify(time));
  }, [time, timerOn, id]);
  const Time = calcTime(time);
  return (
    <Wrapper>
      <div className="Timers">
        <h2>time tracking</h2>
        <div className="display"></div>
        <div className="buttons"></div>
      </div>
    </Wrapper>
  );
};

export default TimeTracking;
