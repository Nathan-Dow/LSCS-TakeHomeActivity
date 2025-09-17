import styles from "./Navbar.module.css";

export default function Navbar(){
    return(
        <>
            <div className={styles.navbar}>
                <div className={styles.navbarOptions}>
                    <ul>
                        <li>Products</li>
                        <li>Test 2</li>
                        <li>Test 3</li>
                    </ul>
                </div>
            </div>
        </>
    )
}