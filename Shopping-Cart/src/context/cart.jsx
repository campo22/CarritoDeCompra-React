/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import { cartInicialState, cartReducer } from '../reducers/cart';

export const CartContext = createContext();

function useCartReduce() {
    const [state, dispatch] = useReducer(cartReducer, cartInicialState);

    // Action para agregar un producto al carrito
    const addToCart = (product) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })
    // Action para remover un producto del carrito
    const removeFromCart = (product) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })
    // Action para limpiar el carrito
    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    // accaion para incrementar la cantidad de un producto en el carrito
    const incrementQuantity = (product) => dispatch({
        type: 'INCREMENT_QUANTITY',
        payload: product
    })
    // accaion para decrementar la cantidad de un producto en el carrito
    const decrementQuantity = (product) => dispatch({
        type: 'DECREMENT_QUANTITY',
        payload: product
    })

    return { state, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity }
}

export function CartProvider({ children }) {
    const {
        state,
        addToCart,
        removeFromCart,
        clearCart,
        incrementQuantity,
        decrementQuantity } = useCartReduce();


    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart,
            incrementQuantity,
            decrementQuantity
        }}>
            {children}

        </CartContext.Provider>
    )
}

