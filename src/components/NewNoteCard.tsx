import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

interface NewNoteCardProps {
  onNoteCreated: (content: string, title: string) => void;
}

let speechRecognition: SpeechRecognition | null = null;

export default function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
  const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("Title...");

  function handleStartEditor() {
    setShouldShowOnBoarding(false);
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
    if (event.target.value === "") {
      setShouldShowOnBoarding(true);
    }
  }

  const handleTitleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const contentTextarea = document.getElementById(
        "contentTextarea"
      ) as HTMLTextAreaElement | null;
      if (contentTextarea) {
        contentTextarea.focus();
      }
    }
  };

  function handleTitle(event: ChangeEvent<HTMLTextAreaElement>) {
    setTitle(event.target.value);
  }

  function handleSaveNote(e: FormEvent) {
    e.preventDefault();

    setTitle("Title...");

    if (content === "") {
      return;
    }

    onNoteCreated(content, title);
    setContent("");
    setShouldShowOnBoarding(true);

    toast.success("Note created with success");
  }

  function handleStartRecording() {
    const isSpeechRecognitionAPIAvailable =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

    if (!isSpeechRecognitionAPIAvailable) {
      alert("Unfortunately your navigator do not suport the recording API");
      return;
    }
    setIsRecording(true);
    setShouldShowOnBoarding(false);

    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    speechRecognition = new SpeechRecognitionAPI();

    speechRecognition.lang = "en";
    speechRecognition.continuous = true;
    speechRecognition.maxAlternatives = 1;
    speechRecognition.interimResults = true;

    speechRecognition.onresult = (e) => {
      const transcription = Array.from(e.results).reduce((text, result) => {
        return text.concat(result[0].transcript);
      }, "");

      setContent(transcription);
    };

    speechRecognition.onerror = (e) => {
      console.log(e);
    };

    speechRecognition.start();
  }

  function handleStopRecording() {
    setIsRecording(false);

    if (speechRecognition !== null) {
      speechRecognition.stop();
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col text-left bg-slate-700 gap-3 outline-none p-5 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible: ring-lime-400">
        <span className="text-small font-medium text-slate-200 ">New note</span>
        <p className="text-small leading-6 text-slate-400">
          Record an audio note that will be converted to text automatically.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>
          <form className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-small font-medium text-slate-300 ">
                New note
              </span>
              {shouldShowOnBoarding ? (
                <p className="text-small leading-6 text-slate-400">
                  Start by{" "}
                  <button
                    type="button"
                    onClick={handleStartRecording}
                    className="font-md text-lime-400 hover:underline"
                  >
                    recording an audio note
                  </button>{" "}
                  or if you prefer{" "}
                  <button
                    type="button"
                    onClick={handleStartEditor}
                    className="font-md text-lime-400 hover:underline"
                  >
                    just use text
                  </button>
                  .
                </p>
              ) : (
                <div className="w-full h-full">
                  <textarea
                    placeholder="Title..."
                    value={title}
                    onChange={handleTitle}
                    autoFocus
                    onKeyDown={handleTitleKeyDown}
                    maxLength={30}
                    className="text-2xl w-full font-medium text-slate-200/80 mb-[-22px]
                    bg-transparent block resize-none flex-1 outline-none"
                  />

                  <textarea
                    id="contentTextarea"
                    value={content}
                    onChange={handleContentChanged}
                    autoFocus
                    className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none h-5/6 w-full overflow-hidden "
                  />
                </div>
              )}
            </div>

            {isRecording ? (
              <button
                type="button"
                onClick={handleStopRecording}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 py-4 text-center text-sm text-slate-300 outline-none font-medium hover:text-slate-100"
              >
                <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                Recording! (Click to interrupt)
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSaveNote}
                className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
              >
                Save Note
              </button>
            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
