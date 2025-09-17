import './App.css';
import Navbar from "./components/navbar/Navbar.jsx";
import ProductPanel from "./components/productpanel/ProductPanel.jsx";
function App() {

  return (
   <>
       <div className="app">
           <Navbar/>
           <ProductPanel/>
       </div>
   </>
  )
}

export default App
