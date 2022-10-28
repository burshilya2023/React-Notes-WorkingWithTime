import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { TimeLeft } from "../timeLeft/TimeLeft";

const NavBarWrapper = styled(motion.div)`
  z-index: 2;
  height: 60px;
  position: fixed;
  display: flex;
  background: #383838;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2%;
  color: white;
  font-weight: 800;
`;

const NavBar = ({ isVisibleSearch, setisVisibleSearch }) => {
  return (
    <>
      <NavBarWrapper>
        <div onClick={() => setisVisibleSearch(!isVisibleSearch)}>
          <AiOutlineSearch alt="search-icon" size={"2rem"} />
        </div>
        <TimeLeft />{" "}
        {/* //!just an example of working with a countdown timer */}
      </NavBarWrapper>
    </>
  );
};
export default NavBar;
