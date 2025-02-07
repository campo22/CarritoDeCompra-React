/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// 1. crea el contexto 
// este es el que tenemos que consumir en los componentes
export const FilterContext = createContext();

//2. crea el provider, para que el 
// contexto sea accesible en todo el componente
// este es el que nos provee acceso 
export function FilterProvider({ children }) {
    const [filter, setFilter] = useState({
        category: 'all',
        minPrice: 250
    });
    return (
        <FilterContext.Provider value={{
            // aqui van los valores que se van a compartir
            filter,
            setFilter
        }}>
            {children}
        </FilterContext.Provider>
    );
}
