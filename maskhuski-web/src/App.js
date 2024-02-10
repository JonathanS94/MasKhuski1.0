import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal/Principal";
import Niveles from "./pages/Niveles/Niveles";
import Principiante from "./pages/Principiante/Principiante";
import Intermedio from "./pages/Intermedio/Intermedio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Principal />} />
        <Route path="/niveles" element={<Niveles />} />
        <Route path="/niveles" element={<Principiante />} />
        <Route path="/niveles" element={<Intermedio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
