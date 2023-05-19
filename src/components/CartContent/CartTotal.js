import { useContext } from "react";
import { DataContext } from "../Contex/DataContext";

const CartTotal = () => {
  const { cart } = useContext(DataContext); 

  const Total = cart.reduce((acc, product) => acc + product.price, 0); 

  return (
    <div className="cartTotal">
      <h3>Total a pagar: {Total}</h3>
      <button className="boton-final">Finalizar compra</button>
    </div>
  );
};

export default CartTotal;