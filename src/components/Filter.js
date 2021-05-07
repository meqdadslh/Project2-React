import React from 'react';
import react, {useState, useEffect} from 'react'; 

// const [filteredCountries, setFilteredCountries] = useState([]);

const Filter = (props) => {
    
    const [countries, setCountries] = useState ([])

    const searchCountry = async term => {
        if(term.lenght < 3 || term === '') return
        const res = await fetch (`https://restcountries.eu/rest/v2/name/${term}`)
        const data = await res.json()
        await setCountries(data)
    }



const filterByRegion = async region => {
    if(region ==='') return
    const res = await fetch (`https://restcountries.eu/rest/v2/region/${region}`)
    const data = await res.json()
    await setCountries(data)
}
  
    return (
        <div className="filter">
            <form className="search-form">
                <input type="search" name="search" id="search" placeholder="Search for a country" onChange={(term) => searchCountry(term.target.value)}/>
            </form>
            <select name="select" id="select" className="select" onChange={ val => filterByRegion(val.target.value)}>
                <option value="Filter by region"> Filter by region </option>
                <option value="Americas"> America </option>
                <option value="Asia"> Asia Pacific</option>
                <option value="Africa"> Africa & Middle East </option>
                <option value="Europe"> Europe </option>

            </select>
            
        </div>
    )
}

export default Filter;
