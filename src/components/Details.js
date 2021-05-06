import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';



const Country = () => {
// setting the state value 
const [country, setCountry] = useState ([])
const {name} = useParams()

useEffect (() => {
    const countryData = async () => {
        const response = await fetch (`https://restcountries.eu/rest/v2/name/${name}`)
        const country = await response.json()
        setCountry(country)
    }
    // call the function
    countryData()
},[])

    return (
        <>
        <Link to ="/">
            <i className="fas fa-arrow-left"></i>Back Home
        </Link>
        {/* Mapping over the details so we could receive the country data */}
           <div className="details">{
               country.map((c) => {
                   const{numericCode, flag,name, demonym, nativeName, capital, population, region, subregion} = c
                   return (
                       <section key={numericCode}>
                           <div classname="flag">
                               <img src={flag} alt ={name}/>
                           </div>
                           <div>
                               <h2>Name: {name}</h2>
                               <h4>Demonym: {demonym}</h4>
                               <h4>Native Name: {nativeName}</h4>
                               <h4>Capital: {capital}</h4>
                               <h4>Population: {population}</h4>
                               {/* <h4>Currencies: {currencies}</h4> */}
                               <h4>Region: {region}</h4>
                               <h4>Subregion: {subregion}</h4>
                           </div>

                       </section>
                    
                   )
               })
           }

           </div>
        </>
    )
}

export default Country
