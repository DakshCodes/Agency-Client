import './App.css'
import Home from './pages/Home/Home'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Employes from './components/Employes/Employes'
import Footer from './components/Footer/Footer'
import Pricing from './components/Pricing/Pricing'
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-12341234-1";
ReactGA.initialize(TRACKING_ID);


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/employes' element={<Employes />} />
        <Route exact path='/pricing' element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
