import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Footer from"./components/Footer"
import CartPage from './pages/CartPage';
import Home from "./pages/Home"
function App() {
  return (
  
    <div className="bg-gradient-to-br from-[#D4E8C0] via-[#C0E0B0] to-[#9BCF90]  overflow-x-hidden relative flex flex-col min-h-screen">       
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      
      <Footer />
   </div>   
  )
}

export default App;
