//import logo from './logo.svg';
//import './App.css';

//Imports components
import Header from "./componentes/Header"
import Maincreate from "./componentes/Maincreate"
import Footer from "./componentes/Footer"
//import Mainread from './componentes/Mainread';

function App() {
  return (

    <div className="App">

        <Header />
        {/* <Mainread /> */}
        <Maincreate />
        <Footer />
     
    </div>
  );
}

export default App;
