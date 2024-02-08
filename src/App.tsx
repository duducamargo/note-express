import { useState } from "react";
import NewNoteCard from "./components/NewNoteCard";
import NoteCard from "./components/NoteCard";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content: content,
    };

    setNotes([newNote, ...notes]);
  }

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>
      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard onNoteCreated={onNoteCreated} />
        {notes.map((note) => {
          return <NoteCard note={note} key={note.id} />;
        })}
      </div>
    </div>
  );
}
