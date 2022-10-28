import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { motion } from "framer-motion";
const NotesWraper = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  .sidebar_list {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
    width: 0;
    transition: 600ms;
  }
  .sidebar_list_active {
    width: 100%;
    padding: 0px 10px;
  }
  .sidebar_list_item {
    border-radius: 50%;
    height: 22px;
    width: 22px;
    list-style: none;
    border: 1px solid black;
  }
`;
const OpenCreateNotes = styled(motion.div)``;
const CreateNotes = styled(motion.div)`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0px 10px;
  .buttonCreate {
    border: 1px solid black;
    background: transparent;
    &:hover {
      background: #58585881;
    }
  }
`;
const InputSearchStyle = styled(motion.input)`
  padding: 10px;
  margin: 10px;
`;
const NotesButton = styled(motion.button)`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 22px;
  background: none;
`;

function NotesCreateBar({ addNote }) {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];
  const [value, setValue] = React.useState("");
  const [color, setcolor] = useState(colors[0]);
  const [listOpen, setListOpen] = useState(false);
  const MotionClick = () => {
    setListOpen(!listOpen);
  };
  const addNoteFn = (color, value) => {
    addNote(color, value);
    setListOpen(false);
    setValue("");
  };
  const handleAdd = (e) => {
    if (e.key === "Enter") {
      addNote(color, value);
      setListOpen(false);
      setValue("");
    }
  };
  const VariantsX = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.1 },
    }),
  };

  return (
    <NotesWraper>
      <OpenCreateNotes layout alt="Add" onClick={MotionClick}>
        <AiOutlinePlusCircle
          style={{ color: listOpen && "#000000", cursor: "pointer" }}
          fontSize={"3rem"}
        />{" "}
      </OpenCreateNotes>
      {listOpen ? (
        <CreateNotes
          layout
          initial="hidden"
          animate="visible"
          variants={VariantsX}
          style={{ backgroundColor: color }}
        >
          <InputSearchStyle
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={handleAdd}
          />

          <ul className={`sidebar_list ${listOpen && "sidebar_list_active"}`}>
            {colors.map((item, index) => (
              <li
                key={index}
                className="sidebar_list_item"
                style={{ backgroundColor: item }}
                onClick={() => setcolor(item)}
              />
            ))}
            <NotesButton onClick={(e) => addNoteFn(color, value)}>
              Add notes
            </NotesButton>
          </ul>
        </CreateNotes>
      ) : null}
    </NotesWraper>
  );
}

export default NotesCreateBar;
