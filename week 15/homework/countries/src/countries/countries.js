import React from 'react';
import style from './countries.module.scss'


function Countries(props) {
   
    return (
        <div className={style.countries}>

            {
                props.countries.map((el, idx) =>
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

export default Countries