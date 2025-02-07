/* eslint-disable react/prop-types */
import { useFilters } from '../HOOKS/useFilters';
import './Filter.css'
import { useId } from 'react';


export function Filter() {

    const { filter, setFilter } = useFilters();


    const minPriceFilterIde = useId();
    const minCategoryFilterIde = useId();

    const handleChangeMinPrice = (e) => {

        setFilter(prevState => ({
            ...prevState,
            minPrice: e.target.value
        })
        )
    }
    const handleChangeCategory = (e) => {

        setFilter(prevState => ({
            ...prevState,
            category: e.target.value
        })
        )
    }

    return (
        <section className="filter">

            <div className="">
                <label htmlFor={minPriceFilterIde}> PRICE</label>
                <input
                    id={minPriceFilterIde}
                    type="range"
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                    value={filter.minPrice}
                />
                <span>$ {filter.minPrice}</span>

            </div>

            <div>
                <label htmlFor={minCategoryFilterIde}>CATEGORIA</label>
                <select name="categoria" id="categoria" onChange={handleChangeCategory}>
                    <option value="all">TODOS</option>
                    <option value="beauty">BELLEZA</option>
                    <option value="fragrances">PERFUMENES</option>
                </select>
            </div>

        </section>
    )
}