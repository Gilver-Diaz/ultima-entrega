import { useContext } from "react";
import { DataContext } from "../Contex/DataContext";






const CartElements= ()=> {
    const { cart } =useContext(DataContext);
  return cart.map((Products) =>{
   return(
    <div className="cartContent" key={Products.id}>
        <img src={Products.img} alt="productos" />
        <h3 className="name">{Products.name}</h3>
        <h4 className="price">{Products.price}$</h4>
    </div>
   );
  });
};

export default CartElements
