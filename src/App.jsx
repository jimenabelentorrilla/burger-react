import './App.css'
import Nav from './componentes/Nav';
import Quienes from './componentes/Quienes';
import Menu from "./componentes/Menu";
import Sucu from "./componentes/Sucu";
import Contacto from './componentes/Contacto';
import Footer from "./componentes/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Nav />
      <Quienes />
      <Menu />
      <Sucu />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
