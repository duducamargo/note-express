import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Toaster } from "sonner";

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <App />
    <Toaster richColors />
  </BrowserRouter>
);
