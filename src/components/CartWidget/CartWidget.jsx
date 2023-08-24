import "./CartWidget.css";
import  carrito from "../../../public/img/cart-shopping-svgrepo-com.svg"

function CartWidget() {
  return (
    <div id="carrito-cotenedor">
    <img className="carrito" src={carrito}/>
    <span>0</span>
    </div>
  );
}

export default CartWidget;
