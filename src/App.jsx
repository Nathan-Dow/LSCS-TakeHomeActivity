import './App.css';
import Navbar from "./components/navbar/Navbar.jsx";
import ProductPanel from "./components/productpanel/ProductPanel.jsx";
import {useState} from "react";
function App() {

    const [query, setQuery] = useState("");
  return (
   <>
       <div className="app">
           <Navbar query={query} setQuery={setQuery} />
           <ProductPanel query={query}/>
       </div>
   </>
  )
}

export default App
