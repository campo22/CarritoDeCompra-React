import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart,] = useState([]);

    // agregar producto al carrito
    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id);
        // si el producto ya existe en el carrito
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            return setCart(newCart);

            // si el producto no existe en el carrito
        } else {
            setCart(prevState => [...prevState,
            { ...product, quantity: 1 }]);

        }
    }

    const removeFromCart = (product) => {
        setCart(prevstate => prevstate.filter(item => item.id !== product.id))
    }

    // eliminar producto del carrito
    const clearCart = () => {
        setCart([]);
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}

        </CartContext.Provider>
    )
}

