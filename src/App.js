import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from './pages/News';
import About from './pages/About';
import NewsDetails from './pages/NewsDetails'
import Home from './pages/Home';
import ArrayFunc from './components/example-array/ArrayFunc';
import Footer from './components/Footer';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {

  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
      setChecked(event.target.checked);
      console.log(checked);
    };


  return (
    <BrowserRouter>
    <div className={`App ${checked === true ? `dark-body`: `light-body`}`} >
      <Nav event={handleChange} mode={checked} />

      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/About" element={<About/>} ></Route>
        <Route path="/news" element={<News/>} ></Route>
        <Route path="/news/:id" element={<NewsDetails/>} ></Route>
        <Route path="/arr" element={<ArrayFunc/>} ></Route>
        <Route path="/news" element={<Home/>} ></Route>
        <Route path="/exe" element={<TextForm/>} ></Route>

      </Routes>

      <Footer mode={checked} />
    </div>
    </BrowserRouter>
  );
}

export default App;