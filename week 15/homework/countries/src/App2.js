import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Countries from './countries/countries.js'
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Select from 'react-select'

function App() {
  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState('all')
  const [reference, setReference] = useState()
  console.log("1:" + region)
  useEffect(() => {
    const serverCall = async () => {
      try {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await response.json()
        setCountries(data)

      } catch (error) {
        console.log(error)
      }
    }
    serverCall()
  }, [])
  /* const regionChange = (e) => {

    console.log("2:" + e.target.value)
    setRegion(e.target.value)
    console.log("3:" + region)
  } */
  /* const menu = (
    <Menu onChange={regionChange}>
      <Menu.Item value='all'>
        <Link to='all'>All</Link>
      </Menu.Item>
      {
        Array.from(new Set(countries.map(c => c.region))).map((el, idx) =>
          <Menu.Item key={idx} value={el}><Link to={`{el}`}>{el}</Link></Menu.Item>
        )
      }

    </Menu>
  ); */
  let history = useHistory();

  function handleChange(value) {
    history.push(`/?location=${value}`);
  }

  return (
    
      <Select onChange={event => handleChange(event.target.value)}>
        <option>Select Location</option>
        <option value="east">East Building</option>
        <option value="west">West Building</option>
        <option value="south">South Building</option>
        <option value="north">North Building</option>
      </Select>
    
  );
  /* return (
    <Router>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" >
          Region <DownOutlined />
        </a>
      </Dropdown>
      <Switch>
        <Route path="/all" >
          <Countries />
        </Route>
        <Route path={region} >
          <Countries item={region}/>
        </Route>
      </Switch>
    </Router>
  ); */


}


export default App