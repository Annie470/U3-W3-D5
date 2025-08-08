import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import Risultati from "./components/Risultati";

function App() {
  return (
    <>
      <BrowserRouter>
     
            <Routes>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/risultati" element={<Risultati />} />
            </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;