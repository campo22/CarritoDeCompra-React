/* eslint-disable react/prop-types */
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import './Cart.css'
import { useCart } from "../HOOKS/useCart";


function CartItem({ thumbnail, price, title, quantity, incrementQuantity, decrementQuantity }) {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title} />

            <div>
                <strong>{title}</strong>- ${price}
            </div>
            <footer>
                <small >
                    Qty: {quantity}
                </small>
                <button onClick={incrementQuantity}>+</button> {/* Botón para incrementar cantidad */}
                <button onClick={decrementQuantity}>-</button> {/* Botón para decrementar cantidad */}
            </footer>
        </li>

    )

}
export function Cart() {
    const cartCheckBoxId = useId();
    const { cart, clearCart, incrementQuantity, decrementQuantity } = useCart();

    // Calcular el total de los productos en el carrito
    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    // Calcular la cantidad total de productos en el carrito
    const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckBoxId}>
                <CartIcon />
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>} {/* Mostrar la cantidad total de productos */}
            </label>

            <input id={cartCheckBoxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            incrementQuantity={() => incrementQuantity(product)}
                            decrementQuantity={() => decrementQuantity(product)}
                            {...product}
                        />
                    ))}
                </ul>
                <div>Total: ${total}</div> {/* Mostrar el total de los productos */}
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    );
}