/* eslint-disable react/prop-types */
import { useFilters } from '../HOOKS/useFilters'
import './Footer.css'


export function Footer() {
    const { filter } = useFilters()


    return (
        <footer className="footer">
            <h1> Prueba Técnica de React</h1>
            <h3>{JSON.stringify(filter, null, 2)} </h3>

            <span>diverCampo22</span>
            <h5> Shopping Cart con useContext & useReducer</h5>
        </footer>
    )
}