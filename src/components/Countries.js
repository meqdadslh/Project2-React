import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';



const url = 'https://restcountries.eu/rest/v2/all'

const Countries = () => {

    const [countries, setCountries] = useState ([])

    
    const getCountries = async (name) => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
    }

        useEffect (() => {
            getCountries()
    },[])
    return (
        <>
        <div className="grid">
        {countries.map((country) => {
                const { numericCode, name, capital, population, region, flag } = country
                return (
                    <article key={numericCode}>
                        <div>
                        <img className="image" src={flag} alt={flag}/>
                        <div className="description">
                        <h4>{name}</h4>
                        <h5>Capital: {capital}</h5>
                        <h5>Population: {population}</h5>
                        <h5>Region: {region}</h5>
                        <Link to ={`/${name}`}>More</Link>
                        </div>
                        </div>
                    </article>
                )
            })}
        </div>
            
        </>
    )
}

export default Countries
