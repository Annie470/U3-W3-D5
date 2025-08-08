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
{/* AVEVO SCRITTO UNA PAGINA DI RISULTATI MA HO AVUTO QUALCHE PROBLEMA NELLA LOGICA, MI OCCORREVA PIU TEMPO... HO ELIMINATO */}
            </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;