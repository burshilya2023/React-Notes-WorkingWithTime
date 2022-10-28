import styled from "styled-components";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar";
import AppNotes from "./components/Notes/AppNotes";
import { ModalWindowSearch } from "./components/uiCompoennts/ModalWindow";
import SearchInput from "./components/navbar/SearchInput";
const Wrapper = styled(motion.div)`
  overflow: hidden;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1450px;
    margin: 0 auto;
    padding-top: 60px;
    overflow: hidden;
  }
`;

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSearch, setisVisibleSearch] = useState(false);
  const [filter, setfilter] = useState({ sort: "", query: "" });
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );
  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <Wrapper>
      <NavBar
        setVisible={setIsVisible}
        isVisible={isVisible}
        filter={filter}
        setfilter={setfilter}
        isVisibleSearch={isVisibleSearch}
        setisVisibleSearch={setisVisibleSearch}
      />

      <div className="container">
        <AppNotes
          filter={filter}
          notes={notes}
          setNotes={setNotes}
          setfilter={setfilter}
        />
      </div>

      <ModalWindowSearch
        setVisible={setisVisibleSearch}
        isVisible={isVisibleSearch}
      >
        <SearchInput filter={filter} setfilter={setfilter} />
      </ModalWindowSearch>
    </Wrapper>
  );
}
export default App;
