import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from '../src/Pages/Home/Home';
import Mammals from '../src/Pages/Mammals/Mammals';
import Birds from '../src/Pages/Birds/Birds';
import Reptiles from '../src/Pages/Reptiles/Reptiles';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mammals" element={<Mammals />} />
            <Route path="birds" element={<Birds />} />
            <Route path="reptiles" element={<Reptiles />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
