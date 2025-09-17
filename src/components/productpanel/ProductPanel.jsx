import ProductCard from "../productcard/ProductCard.jsx";
import styles from "./ProductPanel.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
export default function ProductPanel() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products") // sample API, replace with yours later
            .then((res) => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch products");
                setLoading(false);
            });
    }, []);

    return(
        <>
            <div className={styles.productPanel}>
                <h2> Products </h2>
                <div className={styles.grid}>

                </div>

                {products.map((product) =>{
                    console.log(product);
                    return(
                        <ProductCard
                        id={product.id}
                        product={product}
                        />
                    )
                })}

            </div>
        </>
    )
}