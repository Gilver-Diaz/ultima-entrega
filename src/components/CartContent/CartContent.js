import { useContext } from "react";
import { DataContext } from "../Contex/DataContext";


import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

import "./CartContent.css"

const CartContent = () =>  {
    const { cart } =useContext(DataContext);
   
return  cart.length > 0 ? (
   <>
<CartElements/>;
<CartTotal />;
   
   
   </>
): (
    <h2 className="cart-messager-center">TU CARRITO ESTA VACIO</h2>
)
};

export default CartContent ;