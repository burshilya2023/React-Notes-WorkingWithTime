import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { createTimer } from "../../WorkWithDate/FormatDate";
import moment from "moment";
import { DatePicker } from "antd";
export const ViewMotion = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};
const Wrapper = styled(motion.div)`
  padding: 15px;
  font-weight: 900;
  display: flex;
  height: 75px;
  align-content: space-between;
  gap: 15px;
`;

const TimeLeft = () => {
  const [secondomer, setSecondomer] = React.useState();
  const [DonwTime, setDownTime] = React.useState(
    moment().format(localStorage.getItem("dateDownKeep" || ""))
  );
  const countdownDate = new Date(DonwTime).getTime();
  const resultTimer = createTimer(countdownDate);
  const resultTimerString = resultTimer();
  setInterval(() => {
    setSecondomer(moment().format("h:mm:ss a"));
  }, 1000);
  const SelectDate = (date) => {
    localStorage.setItem("dateDownKeep", date);
    setDownTime(date);
  };
  React.useEffect(() => {
    setDownTime(localStorage.getItem("dateDownKeep" || ""));
  }, [setDownTime]);
  return (
    <Wrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ amout: 0.2, once: true }}
    >
      <span className="timeAndtimeRemained">
        <motion.h4 custom={3} variants={ViewMotion}>
          <span style={{ color: "white" }}>{secondomer}</span>
        </motion.h4>
        <motion.h4 custom={3} variants={ViewMotion}>
          <span style={{ color: "red" }}>{resultTimerString}</span>
        </motion.h4>
      </span>
      <span>
        <DatePicker onChange={(date) => SelectDate(date)} />
      </span>
    </Wrapper>
  );
};
export { TimeLeft };
