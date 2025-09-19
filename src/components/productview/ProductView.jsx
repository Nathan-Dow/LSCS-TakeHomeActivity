
import styles from "./ProductView.module.css"
import {useState} from "react";
export default function ProductView({product, addToCart, onClose}) {

    const [showPopup, setShowPopup] = useState(false);

    const handleAddtoCart = () => {
        addToCart(product);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 750);
    }
    return (

        <>
            <div className={styles.mainPanel}>

                <div className={styles.closeContainer}>
                    <button onClick={onClose}>
                        X
                    </button>
                </div>

                <div className={styles.mainDisplay}>
                    <img src={product.image} alt={product.title}/>

                    <div className={styles.details}>
                        <h1 className={styles.title}>{product.title}</h1>

                        <h3>{product.rating.rate} ⭐ ({product.rating.count} reviews)</h3>

                        <h3>{product.category}</h3>
                        <h3 className={styles.price}>${product.price}</h3>
                        <h2 className={styles.additional}>Description</h2>
                        <h3>{product.description}</h3>


                        <div className={styles.toCart} onClick={handleAddtoCart}>
                            Add to cart
                        </div>

                        {showPopup && (
                            <div className={styles.popUp}> Added to Cart{"!"}</div>
                        )}
                    </div>
                </div>



            </div>
        </>
    )
}