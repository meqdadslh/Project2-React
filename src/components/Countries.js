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
// remove button in the countries descriptio form
    const remove=(numericCode) => {
        const newCountry = countries.filter((country)=>
        country.numericCode !== numericCode)
        setCountries(newCountry)
    }
    return (
        <>
        <div className="grid">
            {/* the countries component will map over the the data we pulled from API */}
        {countries.map((country) => {
                const { numericCode, name, capital, population, region, flag } = country
                return (
                    // the Key should be a unique code in the API. numericCode is a very unique one for every individual country
                    <article key={numericCode}>
                        <div>
                        <img className="image" src={flag} alt={flag}/>
                        <div className="description">
                        <h4>{name}</h4>
                        <h5>Capital: {capital}</h5>
                        <h5>Population: {population}</h5>
                        <h5>Region: {region}</h5>
                       <div className="functions">
                           {/* adding the router name and connect it to our country component so when clicked it will open a new router with more details of the countries */}
                           <Link to ={`/${name}`}>More</Link>
                           {/* adding an onClick event in our countries description form so when clicked should remove the selected country from the list */}
                        <button className="remove" onClick={() =>
                        remove(numericCode)}>Remove</button></div>
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
