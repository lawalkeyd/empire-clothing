import { useContext } from "react";

// components
import { CartContext } from "../../contexts/cart";

// styles
import "./styles.scss"

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const handleAddItemToCart = () => addItemToCart(cartItem);
    const handleRemoveItemFromCart = () => removeItemFromCart(cartItem)

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity" >
                <div className="arrow" onClick={handleRemoveItemFromCart}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={handleAddItemToCart}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;