import {  createContext , useState, useEffect, useContext} from "react";
import axios from "axios";

export const DataContext = createContext ();
export const useDataContext = () => useContext(DataContext);

const DataProvider =({ children })=>{

     const [data, setData]= useState([]);
     const [cart, setCart]= useState([]);

     useEffect (()=>{
        axios("data.json").then((res) => setData(res.data));  
     },[])

    return <DataContext.Provider value={{ data ,cart, setCart}} >{children}</DataContext.Provider>;
     
};

export default DataProvider;