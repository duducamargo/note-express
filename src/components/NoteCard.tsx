import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { X } from "lucide-react";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "sonner";

interface NoteCardProps {
  note: {
    id: string;
    date: Date;
    content: string;
    title: string;
  };

  onNoteDeleted: (id: string) => void;

  onNoteEdited: (
    id: string,
    editedTitle: string,
    editedContent: string
  ) => void;
}

export default function NoteCard({
  note,
  onNoteDeleted,
  onNoteEdited,
}: NoteCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setEditedTitle(note.title);
    setEditedContent(note.content);
  }

  function handleSaveEdit() {
    onNoteEdited(note.id, editedTitle, editedContent);
    setIsEditing(false);
    toast.success("Note edited with succes");
  }

  const handleTitleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const contentTextarea = document.getElementById(
        "editedContent"
      ) as HTMLTextAreaElement | null;
      if (contentTextarea) {
        contentTextarea.focus();
      }
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md text-left flex flex-col bg-slate-800 gap-3 p-5 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible: ring-lime-400 ">
        <span className="text-small font-medium text-slate-300 ">
          {formatDistanceToNow(note.date, {
            locale: enUS,
            addSuffix: true,
          })}
        </span>
        <h2 className=" font-medium text-xl mb-[-5px] text-slate-200/80">
          {editedTitle}
        </h2>
        <p className="text-small leading-6 text-slate-400">{editedContent}</p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          {isEditing ? (
            <div className="flex flex-1 flex-col gap-3">
              <span className="text-small font-medium text-slate-300 pt-5 pl-5">
                {formatDistanceToNow(note.date, {
                  locale: enUS,
                  addSuffix: true,
                })}
              </span>
              <textarea
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                autoFocus
                onKeyDown={handleTitleKeyDown}
                maxLength={30}
                className="h-12 text-2xl font-medium text-slate-200/80 
              bg-transparent block resize-none flex-1 outline-none pl-5 mb-[-260px] md:mb-[-112px]"
              />

              <textarea
                id="editedContent"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                autoFocus
                className="leading-6 pl-5 text-slate-400 bg-transparent resize-none flex-1 outline-none h-5/6 w-full overflow-hidden"
              />
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex fixed bottom-0 w-full">
                  <button
                    type="button"
                    onClick={handleSaveEdit}
                    className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
                  >
                    Save Note
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="w-24 text-2xl text-lime-950 flex justify-center items-center border-l-2 border-lime-500 bg-lime-400 hover:bg-slate-800/50 duration-[0.3s]   hover:text-lime-400"
                  >
                    <BiEditAlt />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-1 flex-col gap-3">
              <span className="text-small font-medium text-slate-300 pt-5 pl-5">
                {formatDistanceToNow(note.date, {
                  locale: enUS,
                  addSuffix: true,
                })}
              </span>
              <textarea
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                autoFocus
                disabled
                className="h-12 text-2xl font-medium text-slate-200/80 
              bg-transparent block resize-none flex-1 outline-none pl-5 mb-[-260px] md:mb-[-112px]"
              />

              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                autoFocus
                disabled
                className="leading-6 pl-5 text-slate-400 bg-transparent resize-none flex-1 outline-none h-5/6 w-full overflow-hidden"
              />
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex fixed bottom-0 w-full">
                  <button
                    type="button"
                    onClick={() => onNoteDeleted(note.id)}
                    className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group"
                  >
                    Do you want to{" "}
                    <span className="text-red-400 group-hover:underline">
                      delete this note?
                    </span>
                  </button>
                  <button
                    onClick={handleEdit}
                    className="w-24 text-2xl flex justify-center items-center bg-slate-800/80 hover:bg-slate-800/50   hover:text-lime-400 "
                  >
                    <BiEditAlt />
                  </button>
                </div>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
