import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonMotion = styled(motion.div)`
  position: relative;
`;
const Li = styled(motion.li)`
  padding: 10px;
  border-radius: 5px;
  background-color: #f2f2f2;
  color: black;
  text-align: center;
  position: "relative";
  white-space: nowrap;
  font-weight: 500;
`;
const ActiveLine = styled(motion.div)`
  width: 100%;
  height: 4px;
  margin-top: 5px;
  position: absolute;
  background-color: #060655;
`;
export const SelectButton = (props) => {
  const { ActiveIndex, sel, handleIndexAndFilter } = props;
  return (
    <ButtonMotion>
      <Li
        layout
        onClick={handleIndexAndFilter}
        initial={{ color: "#0b0b0b" }}
        animate={{ color: ActiveIndex ? "#060655" : "#0b0b0b" }}
        whileTap={{
          scale: 1.1,
        }}
      >
        {sel ? sel : "all"}
      </Li>
      {ActiveIndex && (
        <ActiveLine translate={{ duration: 1 }} layoutId="activeItem" />
      )}
    </ButtonMotion>
  );
};
