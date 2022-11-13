import React from "react";
import styled from "styled-components";
import Note from "./Note";
import { motion } from "framer-motion";
import { ScaleMotion } from "../../MotionVaribles";
const Wrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 30px;
  width: 100%;
  margin-bottom: 25px;
  @media (max-width: 565px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
const H1 = styled(motion.div)`
  align-items: center;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  font-weight: 800;
`;

function NotesMap(props) {
  if (!props.notes.length) {
    return (
      <H1
        initial="hidden"
        whileInView="visible"
        variants={ScaleMotion}
        viewport={{ amout: 0.2, once: true }}
      >
        create your first Notes
      </H1>
    );
  }

  return (
    <Wrapper>
      {props.notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          {...note}
          deleteNote={props.deleteNote}
          updateText={props.updateText}
          updateTitle={props.updateTitle}
        />
      ))}
    </Wrapper>
  );
}
export default NotesMap;
