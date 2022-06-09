// import logo from './logo.svg';
//import './App.css';

 import { Routes, Route } from "react-router-dom"

//Imports components
import Header from "./componentes/Header"
import Maincreate from "./componentes/Maincreate"
import Footer from "./componentes/Footer"
import Mainread from './componentes/Mainread'

function App() {
  return (
    <>
      <Header />

        <Routes>
          <Route path="create" element={ <Maincreate /> } />
          <Route path="read" element={ <Mainread /> } />
          <Route path="/" element={ <Maincreate /> } />
        </Routes>

      <Footer />
    </>
    
  );
}

export default App;
