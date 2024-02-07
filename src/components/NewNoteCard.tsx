export default function NewNoteCard() {
  return (
    <div className="rounded-md bg-slate-700 space-y-3 p-5">
      <span className="text-small font-medium text-slate-200 ">
        Adicionar nota
      </span>
      <p className="text-small leading-6 text-slate-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  );
}
