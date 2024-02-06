import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import Flowers from "./pages/Flowers/Flowers";
import Reference from "./pages/References/References";
import { Description } from "@mui/icons-material";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/who-we-are"} element={<WhoWeAre />} />
        <Route path={"/references"} element={<Reference />} />
        <Route path={"/flowers"} element={<Flowers />} />
        <Route path={"/contact-with-us"} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
