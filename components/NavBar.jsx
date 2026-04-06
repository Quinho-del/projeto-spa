import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/produtos">Filmes</Link> | 
      <Link to="/contato">Contato</Link>
    </nav>
  )
}

export default Navbar