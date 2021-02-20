import logo from './logo.svg';
import './App.css';
import Countries from './countries/countries.js'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Select from 'react-select'
import { useHistory } from 'react-router-dom'
import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const { SubMenu } = Menu;

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

  const [current, setCurrent] = useState()
  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };

  const regionChange = (e) => {

    console.log("2:" + e.target.value)
    setRegion(e.target.value)
    console.log("3:" + region)
  }
  console.log("4:" + region)
  

  return (
    <div className="App">

      <Router>

        <div>


          {/* <select name="countriesByRegion" onChange={regionChange}>
            <option value='all'>All</option>

            {
              Array.from(new Set(countries.map(c => c.region))).map((el, idx) =>
                <option key={idx} value={`region/${el}`}>{el}</option>)
            }

          </select> */}
          <Link key="one" to='/all'>All</Link>
          <Link key="two" to='/europe'>Europe</Link>
          <Link key="three" to='/asia'>Asia</Link>
          


          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route path="/all" >
              <Countries item="all"/>
            </Route>
            <Route path="/europe" >
              <Countries item="region/europe" />
            </Route>
            <Route path="/asia" >
              <Countries item="region/asia" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;





