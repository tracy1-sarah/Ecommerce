import React, { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-hot-toast"

const Context = createContext()

    

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    let foundProduct;
    let index;


    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item)=> item._id === product._id)
        setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price * quantity)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

       //check if product adding to cart is already in the cart, increase quantity if it is 
        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantiy: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems)
            toast.success(`${qty} ${product.name}  added to cart`)
        } else {
            //new product added to cart
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }])
            toast.success(`${qty} ${product.name}  added to cart`)           
        }     
    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id)
        const newCartItems = cartItems.filter((item)=> item._id !== id) //keep all items aside from the updated one


        if (value === 'inc') {
            //update current cart items with new cart quantity items
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);  //spread the product, increase by 1
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
            
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
               //spread the product, decrease by 1
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
               
            }
        }
        
    }

    const incQty = () => {
        setQty((prevQty)=> prevQty + 1)
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    }

    return (
        <Context.Provider value={{
            showCart,
            setShowCart,
            cartItems,
            totalQuantities,
            qty,
            incQty,
            totalPrice,
            decQty,
            onAdd,
            toggleCartItemQuantity
        }}>
            {children}
        </Context.Provider>
    )    
}
export const useStateContext = () => useContext(Context);
