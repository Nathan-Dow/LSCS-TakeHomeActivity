import './App.css';
import Navbar from "./components/navbar/Navbar.jsx";
import ProductPanel from "./components/productpanel/ProductPanel.jsx";
import {useState} from "react";
function App() {

    const [query, setQuery] = useState("");
    const [cartData, setCartData] = useState([]);
    const handleAddToCart = (product) => {setCartData((prev) => [...prev, product])}
  return (
   <>
       <div className="app">
           <Navbar query={query} setQuery={setQuery} cart={cartData}/>
           <ProductPanel query={query} addToCart={handleAddToCart}/>
       </div>
   </>
  )
}

export default App
