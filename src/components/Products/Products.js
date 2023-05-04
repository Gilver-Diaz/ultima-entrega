import { useContext } from "react";
import { dataContext } from "../Contex/DataContext"



const Products = () => {
    const { data }= useContext(dataContext);
  return data.map((products)=>{
     return(
        <div className="card">
            <img src={products.img} alt="img-products-card"/>
            <h3>{products.name}</h3>
            <h4>{products.price}</h4>
            <button>Buy</button>
        </div>
     );
    });
};

export default Products;

