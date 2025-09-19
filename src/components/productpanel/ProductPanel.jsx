import ProductCard from "../productcard/ProductCard.jsx";
import styles from "./ProductPanel.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import ProductView from "../productview/ProductView.jsx";

export default function ProductPanel({query, addToCart}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        let mounted = true;
        axios
            .get("https://fakestoreapi.com/products") // sample API, replace with yours later
            .then((res) => {
                if (!mounted) return;
                setProducts(res.data || []);
                setLoading(false);
            })
            .catch(() => {
                if (!mounted) return;
                setError("Failed to fetch products");
                setLoading(false);
            });

        return () => {
            mounted = false;
        };

    }, []);

    let filteredData;
    if (query.trim() === ""){
        filteredData = products;
    } else {
        const product = query.toLowerCase();
        filteredData = products.filter((item) =>
            item.title.toLowerCase().includes(product)
        );
    }


    return(
        <>
            <div className={styles.productPanel}>
                <h2 className={styles.productPanelTitle}> Product Catalog </h2>
                <div className={styles.gridContainer}>
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => {
                            return(
                                <ProductCard
                                    id = {item.id}
                                    product = {item}
                                    onClick = {() => setSelected(item)}
                                />
                                )
                        })
                    ) : <p>No products found matching "{query}"</p>
                    }
                </div>

                {selected && (
                    <ProductView
                        product = {selected}
                        addToCart={addToCart}
                        onClose = {() => setSelected(null)}
                    />
                )}
            </div>
        </>
    )
}