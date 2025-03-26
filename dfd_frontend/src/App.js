import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Results from './components/Results';
import AboutModel from './components/AboutModel';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
     <Header/>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/AboutModel' element={<AboutModel />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/Results' element={<Results/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
