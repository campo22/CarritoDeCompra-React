import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ childre }) {
    const [cart, setCart] = useState([]);

    // agregar producto al carrito
    const addToCart = products => {
        const productInCartIdex =
            cart.findIndex(item => item.id === products.id);
        // si el producto ya existe en el carrito
        if (productInCartIdex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCartIdex].quantity += 1;
            return setCart(newCart);

            // si el producto no existe en el carrito
        } else {
            setCart(prevState => [...prevState,
            { ...products, quantity: 1 }]);

        }
    }

    // eliminar producto del carrito
    const clearCart = () => {
        setCart([]);
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}>
            {childre}

        </CartContext.Provider>
    )
}

