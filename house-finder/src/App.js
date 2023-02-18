import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';

import Footer from './components/footer/Footer';
import Houses from './components/Houses/Houses';
import Home from './components/home/Home';
import About from './components/about/About';
import Feedback from './components/newsletter/Feedback';



function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/houses' element={<Houses />} />
          <Route path='/about' element={<About />} />
          <Route path='/Feedback' element={<Feedback />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>

        <Footer />
    </Router>

    </div>
  );
}

export default App;
