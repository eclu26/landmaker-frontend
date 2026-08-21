import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Auth from "./pages/Auth";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/auth" element={<Auth />} />
        <Route path="/admin/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;