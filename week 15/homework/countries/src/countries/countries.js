import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import style from './countries.module.scss'
import { useHistory } from 'react-router-dom'

function Countries({ item }) {
    const [countries, setCountries] = useState([])
    const [region, setRegion] = useState()
    console.log("1.1:" + item)

    useEffect(() => {
        const serverCall = async () => {
            try {
                const response = await fetch(`https://restcountries.eu/rest/v2/` + item)
                const data = await response.json()
                setCountries(data)
                console.log('region:' + item)
            } catch (error) {
                console.log(error)
            }
        }
        serverCall()
    }, [])

    

    return (
        <div className={style.countries}>

            {
                countries.map((el, idx) =>
                    <div key={idx} className={style.country}>
                        <img src={el.flag}></img>
                        <div>{el.name}</div>
                        <div>Population: {el.population}</div>
                        <div>Region: {el.region}</div>
                        <div>Capital: {el.capital}</div>

                    </div>)
            }
        </div>
    )
}

export default Countries;