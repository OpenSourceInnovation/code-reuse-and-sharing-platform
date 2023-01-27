
import './App.css';
import Header from './Components/Home/Header.js'
import Home from './Components/Home/Home.js'
import Playground from './Components/Home/Playground.js'
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Playground/>
      <Footer/>
    </div>
  );
}

export default App;
