import Home from "./components/Home/home";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Contex/DataContext";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <DataProvider>
    <BrowserRouter>
    
     <Routes>
      <Route path="/"element={<Home/>} />
      <Route path="/cart" element={<CartContent/>} />
     </Routes>
  </BrowserRouter>
  </DataProvider>
  
  );
 
}

export default App;
