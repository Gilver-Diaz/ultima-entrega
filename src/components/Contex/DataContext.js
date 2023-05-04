import {  createContext , useState, useEffect} from "react";
import axios from "axios";

 export const dataContext = createContext ();

const DataProvider =({ Children })=>{
     const [data, setData]= useState([]);

     useEffect (()=>{
        axios("data.json").then((res) => setData(res.data));  
     },[])

    return <dataContext.Provider value={{ data }} >{Children}</dataContext.Provider>;
     
};

export default DataProvider;