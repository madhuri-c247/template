import { BrowserRouter, Route, Routes } from "react-router-dom";
//CSS
import "./App.css";
//components
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
