/* eslint-disable react/prop-types */
import { useFilters } from '../HOOKS/useFilters'
import { useCart } from '../HOOKS/useCart'
import './Footer.css'


export function Footer() {
    const { filter } = useFilters()
    const { cart } = useCart()

    return (
        <footer className="footer">
            {JSON.stringify(cart, null, 2)}
            {/* <h1> Prueba Técnica de React</h1>
            <h3>{JSON.stringify(filter, null, 2)} </h3>
            
            <span>diverCampo22</span>
            <h5> Shopping Cart con useContext & useReducer</h5> */}
        </footer>
    )
}