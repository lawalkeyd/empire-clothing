import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom"
import ProductCard from "../../components/product-card";

import { CategoriesContext } from "../../contexts/categories";

import "./styles.scss"

const Category = () => {
    const { category } = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2 className="title">{category.toUpperCase()}</h2>
            <div className="category-container">
                {
                    products &&
                    products.map((product) => 
                    <ProductCard key={product.id} product={product} />
                    )
                }
            </div>
        </Fragment>
    )
}

export default Category;