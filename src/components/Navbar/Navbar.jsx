import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"

function Navbar() {
  return (
    <navbar id="menu">
      <Brand/>
     
      <ul>
      
        <li>
        <CartWidget/>
        </li>
        <li>
          <a href="">Inicio</a></li>
        <li>
          <a href="">Productos</a>
        </li>
        <li>
          <a href="">Cuenta</a>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
