import { useParams } from 'react-router-dom';
import { products } from './products';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './ProductPage.module.css';
type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    sku: string;
    image: string;
    dimensions: string;
    rating: number;
}
 export function ProductPage() {
    const {id} = useParams();
    const [product, setProduct]=useState<Product>();

    useEffect(()=> {
        const product: Product | undefined= products.find(p=>p.id===id);
        setProduct(product);
    }, [])

    return (
        <main>
            <div className={styles.item}>
                <div className={styles.grid1}>
                    <h2>{product?.name}</h2>
                    <img src={product?.image} alt={product?.image}/>
                </div>
                <div className={styles.grid2}>
                    <p className={styles.price}>Price: {product?.price}</p>
                    <p className={styles.descr}>Description: {product?.description}</p>
                    <p className={styles.rating}>Rating: {product?.rating}</p>
                    <Link to="/Shopping-App">
                        <button className={styles.back}>Back</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

