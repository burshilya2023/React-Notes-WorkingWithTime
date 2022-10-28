import React from "react";
import { useSortedSearch } from "../../hooks/useSort";
import MySelect from "../Select/SortNotesName";
import NotesCreateBar from "./NotesCreateBar";
import NotesMap from "./NotesMap";

function AppNotes({ notes, setNotes, filter, setfilter }) {
  const setedAndSearchPosts = useSortedSearch(notes, filter.sort, filter.query);

  const addNote = (color, value) => {
    const tempNotes = [...notes];
    tempNotes.unshift({
      id: Date.now() + "" + Math.floor(Math.random() * 33),
      text: "",
      title: value,
      time: Date.now(),
      timeRed: null,
      color,
    });
    setNotes(tempNotes);
    setfilter({ ...filter, query: "" });
  };
  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };
  const updateTitle = (text, id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].title = text;
    setNotes(tempNotes);
  };
  const updateText = (text, id, timeRed) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    tempNotes[index].text = text;
    tempNotes[index].timeRed = timeRed;
    setNotes(tempNotes);
  };
  return (
    <>
      <>
        <NotesCreateBar addNote={addNote} />
        <MySelect notes={notes} filter={filter} setfilter={setfilter} />
      </>
      <>
        <NotesMap
          notes={setedAndSearchPosts}
          setNotes={setNotes}
          updateTitle={updateTitle}
          deleteNote={deleteNote}
          updateText={updateText}
        />
      </>
    </>
  );
}
export default AppNotes;
