import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './component/Footer'

function App() {

  return (
    <>
    <Header />
    <Routes>
          
            <Route path="/menu" element={<Menu />} ></Route>
            <Route path="/about" element ={<About />}></Route>
            <Route path="/contact" element = {<Contact/>}></Route>
      </Routes>
      <br />
      <br />
      <Footer />
      </>
    
  )
}

export default App
