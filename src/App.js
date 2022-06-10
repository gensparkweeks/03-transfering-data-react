 import { Routes, Route } from "react-router-dom"

//Imports components
import Header from "./componentes/Header"
import Maincreate from "./componentes/Maincreate"
import Footer from "./componentes/Footer"
import Mainread from './componentes/Mainread'
import Mainurl from "./componentes/Mainurl"

function App() {
  return (
    <>
      <Header />

        <Routes>
          <Route exact path="/" element={ <Maincreate /> } />
          <Route path="create" element={ <Maincreate /> } />
          <Route path="read" element={ <Mainread /> } />
          <Route path="url/:first/:last/:email/:dob" element={ <Mainurl /> } />
          
        </Routes>

      <Footer />
    </>
    
  );
}

export default App;
