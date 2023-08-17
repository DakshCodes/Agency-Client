import './App.css'
import Home from './pages/Home/Home'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact/Contact'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
