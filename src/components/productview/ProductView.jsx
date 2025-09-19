
import styles from "./ProductView.module.css"
export default function ProductView({product, onClose}){

    return (

        <>
            <div className={styles.mainPanel}>

                <div className={styles.closeContainer}>
                    <button onClick={onClose}>
                        return
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


                        <div className={styles.toCart}>
                            Add to cart
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}