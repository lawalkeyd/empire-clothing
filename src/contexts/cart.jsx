import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) => {
    const cartItemExist = cartItems.find((item) => 
            item.id === productToAdd.id
        )

    if(cartItemExist){
        return cartItems.map((item) => 
            item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item
        )
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, productToRemove) => {
    const hasCartItems = cartItems.find((item) => 
            item.id === productToRemove.id && item.quantity > 1
        )

    if(hasCartItems){
        return cartItems.map((item) => 
            item.id === productToRemove.id ? {...item, quantity: item.quantity - 1} : item
        )
    }

    return cartItems.filter((item) => item.id !== productToRemove.id)
}

const clearCartItem = (cartItems, productToClear) => cartItems.filter((item) => item.id !== productToClear.id)

export const CartContext = createContext({
    isCartOpen:  false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0, 
    removeItemFromCart: () => {},
    clearCartItem: () => {},
    total: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]); 
    const [cartCount, setCartCount] = useState("");
    const [totalCount, setTotalCount] = useState("");

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear))
    }

    useEffect(() => {
        const newCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        const newTotalCount = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0)
        setCartCount(newCount);
        setTotalCount(newTotalCount);
    } , [cartItems])

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearItemFromCart, totalCount }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}