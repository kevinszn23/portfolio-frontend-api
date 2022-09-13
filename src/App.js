import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import {Routes, Route} from "react-router-dom"


function App() {
  const URL = "http://localhost:4000/"
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects URL={URL}/>}/>
        <Route path="/about" element={<About URL={URL}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
