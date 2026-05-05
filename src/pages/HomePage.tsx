import { Link } from 'react-router-dom';
import {products} from "./products"
import styles from './HomePage.module.css';

export function HomePage() {
   
    return (
        <main >
            <div className={styles.productList}>
                {products.map((product) => (
                    <Link to={`/product/${product.id}`}>
                        <div className={styles.product}> 
                            <img src={product.image}/>
                            <h4>Price: {product.price}</h4>
                            <h3 >{product.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}