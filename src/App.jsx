import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import { Route, Routes } from 'react-router-dom';
import Allprojects from './pages/projects/Allprojects';
import Projectdetail from './pages/projects/Projectdetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />}>
          <Route path='' element={<Allprojects />} />
          <Route path=':id' element={<Projectdetail />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;