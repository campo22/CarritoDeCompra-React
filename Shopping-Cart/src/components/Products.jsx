/* eslint-disable react/prop-types */
import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useCart } from '../HOOKS/useCart';

export function Products({ products }) {
    const { addToCart, cart, removeFromCart } = useCart();

    // Verificar si el producto ya está en el carrito
    const checkProductInCart = (product) => {
        return cart.some((item) => item.id === product.id);
    };

    return (
        <div className="products">
            <ul>
                {products.slice(0, 10).map((product) => {
                    const isProductInCart = checkProductInCart(product);

                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - $ {product.price}
                            </div>
                            <div>
                                <button
                                    style={{ backgroundColor: isProductInCart ? 'red' : 'green' }}
                                    onClick={() => {
                                        isProductInCart ?
                                            removeFromCart(product) :
                                            addToCart({ ...product, quantity: 1 }) // Agregar producto con cantidad inicial de 1
                                    }}
                                >
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }

                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
