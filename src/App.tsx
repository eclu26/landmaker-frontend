import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import Projects from "./pages/Projects"
import CreateProject from "./pages/CreateProject";

function App() {
  return (
    <>
      <div className="container"> 
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"> 
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"> 
            <span className="fs-4">Лендмейкер</span> 
          </a> 
          <ul className="nav nav-pills"> 
            <li className="nav-item"><a href="/projects" className="nav-link">Проекты</a></li> 
          </ul> 
          <div className="col-md-3 text-end"> 
            <a type="button" className="btn btn-outline-primary me-2" href="/auth">Войти</a> 
            <a type="button" className="btn btn-primary" href="/register">Зарегестрироваться</a> 
          </div>
        </header> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/register" element={<Register />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/create" element={<CreateProject />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;