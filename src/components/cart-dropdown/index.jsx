import Button from "../button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"

import { CartContext } from "../../contexts/cart";
import CartItem from "../cart-item";

import "./styles.scss"

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutHandler = () => (
        navigate('/checkout')
    )

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => 
                <CartItem key={item.id} cartItem={item} />
                )}
            </div>
            <Button onClick={checkoutHandler} >CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;