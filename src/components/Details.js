import React from 'react';
import {Link, useParams} from 'react-router-dom';
import React, {useState, useEffect} from 'react';



const Details = () => {
// setting the state value 
const [details, setDetails] = useState ([])
const {name} = useParams()

useEffect (() => {
    const countryData = async () => {
        const response = await fetch (`https://restcountries.eu/rest/v2/name/${name}`)
        const Details = await response.json()
        setDetails(details)
    }
    countryData()
},[])

    return (
        <>
        <Link to ="/">
            <i className="fas fa-arrow-left"></i>Back Home
        </Link>
            <h1>Hello world</h1>
        </>
    )
}

export default Details
