import styles from './ProductCard.module.css';

export default function ProductCard({product}){
    return(
        <>
            <div className={styles.productCard}>
                    <img src={product.image} alt={product.title}/>

                    <div className={styles.details}>
                        <h3>Title: {product.title}</h3>
                        <h3>Description: {product.description}</h3>

                        <h3>{product.image}</h3>
                        <h3>Category: {product.category}</h3>
                        <h3>Stars: {product.rating.rate}</h3>
                        <h3>Rating number: {product.rating.count}</h3>
                        <h3>Price: ${product.price}</h3>
                    </div>

            </div>
        </>
    )
}