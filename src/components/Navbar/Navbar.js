import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <div className="navbar-container">
      <nav className="navbar">
       <h1 className="navbar-logo">Shop</h1>
       <Link className="Carrito"to={"/cart"}>🛒</Link>
      </nav>
   </div>
  );
}

export default Navbar