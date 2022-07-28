import { useContext } from "react";

import { ProductsContext } from "../../contexts/products";
import ProductCard from "../../components/product-card"

import "./styles.scss"

const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
    <div className="products-container">
        {
            products.map((product) => (
                <div key={product.id}>
                    <ProductCard product={product} />                    
                </div>
            ))
        }
    </div>
    )
}

export default Shop;