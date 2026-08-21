import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import Projects from "./pages/Projects"
import CreateProject from "./pages/CreateProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/create" element={<CreateProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;