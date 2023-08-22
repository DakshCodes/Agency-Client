import './App.css'
import Home from './pages/Home/Home'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Employes from './components/Employes/Employes'
import Footer from './components/Footer/Footer'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/employes' element={<Employes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
