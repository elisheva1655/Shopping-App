import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { NavBar } from './NavBar';

function App() {
  

  return (
     <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
      </Routes>
    </>
  )
}

export default App
