import "./App.css";

import Monedas from "./components/Monedas/Monedas";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Principal from "./pages/Principal/Principal";
import Niveles from "./pages/Niveles/Niveles";
import Principiante from "./pages/Principiante/Principiante";
import Intermedio from "./pages/Intermedio/Intermedio";

const App = () => {
  return (
    <div>
      <Principal />
      <Monedas />
    </div>
    
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
