import { ChangeEvent, useState } from "react";
import NewNoteCard from "../components/NewNoteCard";
import NoteCard from "../components/NoteCard";

interface Note {
  id: string;
  date: Date;
  content: string;
  title: string;
}

export default function App() {
  const [search, setSearch] = useState("");

  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem("notes");

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }
    return [];
  });

  function onNoteCreated(content: string, title: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content: content,
      title: title,
    };

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function onNoteEdited(
    id: string,
    editedTitle: string,
    editedContent: string
  ) {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title: editedTitle,
          content: editedContent,
        };
      }
      return note;
    });

    setNotes(updatedNotes);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  function onNoteDeleted(id: string) {
    const notesArray = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const query = e.target.value;

    setSearch(query);
  }

  const filteresNotes =
    search !== ""
      ? notes.filter(
          (note) =>
            note.content
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase()) ||
            note.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes;

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5 mb-20 ">
      <form className="w-full">
        <input
          type="text"
          placeholder="Search in your notes..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
          onChange={handleSearch}
        />
      </form>
      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {filteresNotes.map((note) => {
          return (
            <NoteCard
              note={note}
              key={note.id}
              onNoteEdited={onNoteEdited}
              onNoteDeleted={onNoteDeleted}
            />
          );
        })}
      </div>
    </div>
  );
}
