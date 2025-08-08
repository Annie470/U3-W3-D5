import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeContainer from "./components/HomeContainer";

function App() {
  return (
    <>
      <BrowserRouter>
     
            <Routes>
              <Route path="/" element={<HomeContainer />} />
            </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;