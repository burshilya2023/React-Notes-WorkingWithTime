import React from "react";

export const calcTime = (time) => {
  const hours = `${("0" + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(
    -2
  )}`;
  const min = `${("0" + Math.floor((time / 60000) % 60)).slice(-2)}`;
  const sec = `${("0" + Math.floor((time / 1000) % 60)).slice(-2)}`;
  <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>;
  return `${hours}ч:${min}м:${sec}c`;
};

const calculetTimeLeft = (t) => {
  if (!t) return 0;

  const left = t - new Date().getTime(); //get ms
  if (left < 0) return 0;
  return left;
};

const useCoutDown = (time) => {
  const [endTime, setendTime] = React.useState(time);
  const [timerLeft, setTimerLeft] = React.useState(() =>
    calculetTimeLeft(endTime)
  );

  React.useEffect(() => {
    setTimerLeft(calculetTimeLeft(endTime));
    const timer = setInterval(() => {
      const targetLeft = calculetTimeLeft(endTime);
      setTimerLeft(targetLeft);

      if (targetLeft === 0) {
        clearInterval(timer);
      }
    });

    return () => clearInterval(timer);
  }, [endTime]);
  return [timerLeft, setendTime];
};

export default useCoutDown;
