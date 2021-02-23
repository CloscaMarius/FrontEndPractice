import './App.css';
import Countries from './countries/countries.js'
import React, { useState, useEffect } from 'react';

function App() {

  const [countries, setCountries] = useState([])
  const [dropdownRegion, setDropdownRegion] = useState('')
  const [regions, setRegions] = useState([])


  useEffect(() => {
    const allCountries = async () => {
      try {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await response.json()
        setRegions(data)

      } catch (error) {
        console.log(error)
      }
    }
    allCountries()
  }, [])

  useEffect(() => {
    const countryByRegion = async () => {
      try {
        // aici iti iei tarile dupa dropdown
        const response = await fetch(`https://restcountries.eu/rest/v2/` + dropdownRegion)
        const data = await response.json()
        setCountries(data)

      } catch (error) {
        console.log(error)
      }
    }
    countryByRegion()
  }, [countries, dropdownRegion])


  return (
    <div className="App">

      <div>

        <select name="countriesByRegion" onChange={(e) => { setDropdownRegion(e.target.value) }}>
          <option value='all'>All</option>
          {
            Array.from(new Set(regions.map(c => c.region))).filter(el => el !== '').map((el, idx) =>
              <option key={idx} value={`region/${el}`}>{el}</option>)
          }</select>

        <Countries countries={countries} />

        <hr />
      </div>
    </div>

  );
}

export default App;





