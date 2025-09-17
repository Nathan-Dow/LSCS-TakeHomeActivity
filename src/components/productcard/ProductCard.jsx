import styles from './ProductCard.module.css';

export default function ProductCard({product}){
    return(
        <>
            <div className={styles.productCard}>
                    <img src={product.image} alt={product.title}/>

                    <div className={styles.details}>
                        <h3 className={styles.titles}>{product.title}</h3>

                        <h3 className={styles.titles}>Category: {product.category}</h3>
                        <h3 className={styles.titles}>Stars: {product.rating.rate}</h3>
                        <h3 className={styles.titles}>Rating number: {product.rating.count}</h3>
                        <h3 className={styles.titles}>Price: ${product.price}</h3>
                    </div>

            </div>
        </>
    )
}