import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { Toaster } from "sonner";

export default function render(url, opts) {
  const stream = renderToPipeableStream(
    <StaticRouter>
      <App />
      <Toaster richColors />
    </StaticRouter>,
    opts
  );

  return stream;
}
