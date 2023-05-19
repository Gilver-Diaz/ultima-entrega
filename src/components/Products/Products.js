import { useContext } from "react";
import { DataContext } from "../Contex/DataContext"

import "./Products.css"

const Products = () => {
    const { data , cart , setCart}= useContext(DataContext);

    const buyProducts =(products)=>{
          
            setCart([...cart , products])
    }
  return data.map((products)=>{
     return(
        <div className="card" key={products.id}>
            <img src={products.img} alt="img-products-card"/>
            <h3>{products.name}</h3>
            <h4>{products.price}</h4>
            <button onClick={()=> buyProducts (products)} >Buy</button>
        </div>
     );
    });
};

export default Products;

