import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./pages/HomePage";
import Novedades from "./pages/NovedadesPage";
import Productos from "./pages/ProductosPage";
import Contacto from "./pages/ContactoPage";
import "../src/styles/components/layout/Footer.css"
import "../src/styles/components/pages/NovedadesPage.css"

function App() {
  return (
    <div className="App">
      <Header />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="Novedades" element={<Novedades />} />
            <Route path="Productos" element={<Productos />} />
            <Route path="Contacto" element={<Contacto />} />
            <Route path="*" element={<Navigate replace to="/"/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
