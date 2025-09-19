import styles from './CartView.module.css'
export default function CartView({cart, onClose}){

    return(
        <>
            <div className={styles.cartContainer}>

                <button onClick={onClose}>
                    Return
                </button>

                <div className={styles.cartItems}>
                    <h1 className={styles.cartTitle}> Shopping Cart </h1>
                    {
                        cart.length > 0 ? (
                            cart.map((item, index) => (
                                <div key={index} className={styles.itemInCart}>
                                    <img src={item.image} alt={item.title} />
                                    <div className={styles.additionalDetails}>
                                        <h1>{item.title}</h1>
                                        <h2>${item.price}</h2>

                                    </div>

                                </div>
                            ))
                        ) : (
                            <h3>No Items</h3>
                        )
                    }
                </div>
            </div>
        </>
    )
}