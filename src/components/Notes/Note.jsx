import React from "react";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { FnRedTime, FnGetCurrentTimeThen } from "../../WorkWithDate/FormatDate";
import { motion } from "framer-motion";
import { useRef } from "react";
const NoteWrapper = styled(motion.div)`
  z-index: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  min-width: 200px;

  .note_name {
    resize: none;
    outline: none;
    background-color: transparent;
    border: none;
    font-weight: 800;
    font-size: 1rem;

    border-bottom: 1px solid black;
  }
  .note_text_textarea {
    resize: none;
    background-color: transparent;
    font-size: 1rem;
    line-height: 1.575rem;
    outline: none;
    border: none;
    min-height: 200px;
    &::-webkit-scrollbar {
      background-color: #777676;
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #223c50;
    }
  }
  .note_footer {
    border-top: 1px solid black;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    cursor: pointer;

    transition: 300ms;
    color: #7c0000;
  }
  .DateCreate {
    font-weight: 800;
    color: #000000;
    font-size: 0.7rem;
    border-bottom: 1px solid gray;
    margin-bottom: 5px;
  }

  .DateRed {
    font-size: 0.8rem;
  }
  .hr {
    border: 1px solid black;
    margin-bottom: 10px;
  }
`;
const Note = React.memo((props) => {
  const {
    id,
    time, //ms
    text,
    title,
    timeRed, //ms
    color,
    deleteNote,
    updateTitle,
    updateText,
  } = props;

  let TimeRed = timeRed || "нету";
  let TimeOnlyne = new Date().getTime();
  let timerRef = useRef();
  let timeout = useRef();
  timerRef = 1000;
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timerRef);
  };
  const updateTitlee = (text, id) => {
    debounce(() => updateTitle(text, id));
  };
  const updateTextt = (text, id) => {
    let timeInMs = Date.now();
    debounce(() => updateText(text, id, timeInMs));
  };
  const CreateNotes = FnGetCurrentTimeThen(time); //time CreateNotes
  const CurrentTimeRed = FnGetCurrentTimeThen(timeRed); //timeRed
  const RedTime = FnRedTime(TimeOnlyne, TimeRed); //the difference between the last edit
  return (
    <NoteWrapper className="note" style={{ backgroundColor: color }}>
      <div className="DateCreate"> create in: {CreateNotes}</div>

      <textarea
        alt="name note"
        maxLength="66"
        className="note_name"
        defaultValue={title}
        placeholder={"name note..."}
        onChange={(event) => updateTitlee(event.target.value, id)}
      />

      <hr className="hr" />
      <textarea
        alt="description note"
        className="note_text_textarea"
        defaultValue={text}
        placeholder={"text..."}
        onChange={(event) => updateTextt(event.target.value, id)}
      />
      <div className="note_footer">
        <p className="DateRed">edit.{CurrentTimeRed}</p>
        <p alt="time difference"> {RedTime} </p>
        <span alt="DELETE" onClick={() => deleteNote(id)}>
          <AiFillDelete fontSize={"2rem"} alt="icon" />
        </span>
      </div>
    </NoteWrapper>
  );
});
export default Note;
