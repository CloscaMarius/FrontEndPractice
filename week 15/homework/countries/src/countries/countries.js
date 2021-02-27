import React from 'react';
import style from './countries.module.scss'


function Countries(props) {
   
    return (
        <div className={style.countries}>

            {
                props.countries.map((el, idx) =>
                    <div key={idx} className={style.country}>
                        <img src={el.flag} alt={el.name}></img>
                        <div className={style.countryName}>{el.name}</div>
                        <div className={style.countryInfo}>Population: {el.population}</div>
                        <div className={style.countryInfo}>Region: {el.region}</div>
                        <div className={style.countryInfo}>Capital: {el.capital}</div>

                    </div>)
            }
        </div>
    )
}

export default Countries