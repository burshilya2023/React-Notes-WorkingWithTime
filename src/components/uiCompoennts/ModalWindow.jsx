import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const WrapperTimeManagment = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: #0000007f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media (max-width: 767px) {
    padding-bottom: 350px;
  }
`;

const ChildrenDiv = styled.div`
  padding: 10px;
  min-width: 400px;
  background: white;
  color: black;
  position: relative;
`;

const WrapperSearch = styled.div`
  position: fixed;
  width: 100%;
  height: 8vh;
  top: 0;
  left: 0;
  background: #a7a7a7;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .childer {
  }
`;

export const ModalWindow = ({ children, setVisible, isVisible }) => {
  return (
    <div>
      {isVisible ? (
        <WrapperTimeManagment onClick={() => setVisible(false)}>
          <ChildrenDiv onClick={(e) => e.stopPropagation()}>
            {children}
          </ChildrenDiv>
        </WrapperTimeManagment>
      ) : null}
    </div>
  );
};

//!just for an example. It would certainly be possible to use transform  and adding 2 classes
export const ModalWindowSearch = ({ children, setVisible, isVisible }) => {
  return (
    //stopPropagation don't let the event pop up
    <div>
      {isVisible ? (
        <WrapperSearch onClick={() => setVisible(false)}>
          <div className="children" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
          <h3 style={{ margin: "10px" }}>cancellation</h3>
        </WrapperSearch>
      ) : null}
    </div>
  );
};
