import React from 'react';
import {useState, useEffect} from 'react';



const url = 'https://restcountries.eu/rest/v2/all'

const Countries = () => {

    const [countries, setCountries] = useState ([])

    useEffect (() => {
        const fetchCountryData = async () => {
            const response = await fetch(url);
            const countries = await response.json();
            setCountries(countries);
            console.log(countries);
        }
    })
    return (
        <div>
            
        </div>
    )
}

export default Countries
