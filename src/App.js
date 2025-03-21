import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Buy from './components/buy';
import Calculator from './components/calculator';
import Findagent from './components/findagent';
import Homeloans from './components/homeloans';
import Rent from './components/rent';
import Sell from './components/sell';

function App() {
  return (
   <>
    <Navbar/>
    
      <div>
    <Routes>        
      <Route path="/buy"  element={<Buy/>} />
      <Route path="/calculator"  element={<Calculator />}/>
      <Route path="/findagent"  element={<Findagent/>}/>
      <Route path="/homeloans"  element={<Homeloans/>}/>
      <Route path="/rent"  element={<Rent/>}/>
      <Route path="/sell"  element={<Sell/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
   
  );
}

export default App;
