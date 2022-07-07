import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from './pages/News';
import About from './pages/About';
import NewsDetails from './pages/NewsDetails'
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>

      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/About" element={<About/>} ></Route>
        <Route path="/news" element={<News/>} ></Route>
        <Route path="/news/:id" element={<NewsDetails/>} ></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;