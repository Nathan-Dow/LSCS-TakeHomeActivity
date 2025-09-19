import styles from "./Navbar.module.css";

export default function Navbar({query, setQuery}){

    return(
        <>
            <div className={styles.navbar}>
                <div className={styles.navbarContent}>
                    <div className={styles.navbarOptions}>
                        <ul>
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

                </div>

            </div>
        </>
    )
}