import React from 'react';
// import react, {useState, useEffect} from 'react'; 

// const [filteredCountries, setFilteredCountries] = useState([]);

const Filter = (props) => {

  
    return (
        <div className="filter">
            <form className="search-form">
                <input type="search" name="search" id="search" placeholder="Search for a country"/>
            </form>
            <select name="select" id="select" className="select">
                <option value="Filter by region"> Filter by region </option>
                <option value="America"> America </option>
                <option value="Asia"> Asia Pacific</option>
                <option value="Africa"> Africa & Middle East </option>
                <option value="Europe"> Europe </option>

            </select>
            
        </div>
    )
}

export default Filter
