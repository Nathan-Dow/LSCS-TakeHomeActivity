
import styles from "./ProductView.module.css"
export default function ProductView({product, onClose}){

    return (

        <>
            <div className={styles.mainPanel}>
                <button onClick={onClose}>
                    return
                </button>
                <img src={product.image} alt={product.title}/>
            </div>
        </>
    )
}