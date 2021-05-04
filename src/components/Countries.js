import React from 'react';
import {useState, useEffect} from 'react';



const url = 'https://restcountries.eu/rest/v2/all'

const Countries = () => {

    const [countries, setCountries] = useState ([])

    
    const fetchCountryData = async () => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
    }

        useEffect (() => {
            fetchCountryData()
    })
    return (
        <>
        <div className="grid">
        {countries.map((country) => {
                const { numericCode, name, capital, population, region, flag } = country
                return (
                    <article key={numericCode}>
                        <div>
                        <img src={flag} alt={flag}/>
                        <h4>{name}</h4>
                        <h5>Capital: {capital}</h5>
                        <h5>Population: {population}</h5>
                        <h5>Region: {region}</h5>
                     </div>
                    </article>
                )
            })}
        </div>
            
        </>
    )
}

export default Countries
