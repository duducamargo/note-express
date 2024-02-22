import { Routes, Route } from "react-router-dom";
import NotesPage from "./pages/NotesPage";

import NavBar from "./layouts/NavBar";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
