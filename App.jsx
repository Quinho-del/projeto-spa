import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Produtos from "./pages/Produtos/Produtos"
import Contato from "./pages/Contatos/Contatos"
import Navbar from "./components/navBar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  )
}

export default App