import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/categories";
import ProductCard from "../../components/product-card"

import "./styles.scss"

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    console.log({categoriesMap})
    return (
        <>
        {

            Object.keys(categoriesMap).map((title) => {

                return(
            <Fragment key={title} >
                <h2>{title}</h2>
                <div className="products-container">
                {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
                </div>
            </Fragment >
            )})
        }    
        </>
    )
}

export default Shop;