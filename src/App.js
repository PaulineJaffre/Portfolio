import Navbar from 'src/components/Navbar/Navbar';
import Main from 'src/components/Main/Main';
import About from 'src/components/About/About';
import Cards from 'src/components/Cards/Cards';
import Contact from 'src/components/Contact/Contact';
import './sass/App.scss';
import Footer from 'src/components/Footer/Footer';
import { HashRouter } from "react-router-dom";



function App() {

    return (
        <HashRouter>
          <Navbar />
          <Main />
          <About />
          <Cards />
          <Contact />
          <Footer />
        </HashRouter>
    );
  }
  
  export default App;





