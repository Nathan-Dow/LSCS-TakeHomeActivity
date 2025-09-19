import styles from "./Navbar.module.css";
import CartView from "./../cartview/CartView.jsx"
import {useState} from "react";

export default function Navbar({query, setQuery, cart}){

    const [clicked, setClicked] = useState(false);
    return(
        <>
            <div className={styles.navbar}>

                    <div className={styles.navbarOptions}>
                        <ul className={styles.unorderedOptions}>
                            <li>Products</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>

                    </div>

                    <div className={styles.searchBar}>
                        <form>
                            <input
                                id="product-name"
                                type="text"
                                placeholder="Search all products..."
                                value={query}
                                onChange={(e)=> setQuery(e.target.value)}
                                required
                            />
                        </form>
                    </div>

                    <div className={styles.cartHolder} onClick={()=>setClicked(true)}>
                        <img src="src/assets/cart.png" alt="cart" width={50} height={40}/>
                        <h3>Cart</h3>
                    </div>

                {clicked && (
                    <CartView
                    cart={cart}
                    onClose = {() => setClicked(false)}
                    />
                )}
            </div>
        </>
    )
}