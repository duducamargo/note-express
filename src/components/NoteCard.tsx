export default function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 space-y-3 p-5 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible: ring-lime-400 ">
      <span className="text-small font-medium text-slate-300 ">há 2 dias</span>
      <p className="text-small leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        molestiae nesciunt a tempora doloribus inventore molestias laudantium
        soluta itaque quo sunt ex, repellat animi accusantium corrupti et
        dignissimos eaque voluptates! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quo officiis dolores eveniet quos debitis. Minus
        obcaecati, velit deserunt beatae esse exercitationem dolorem voluptas
        eaque voluptatum in sed, provident non voluptate.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
