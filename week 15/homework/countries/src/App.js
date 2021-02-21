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
import { withRouter } from 'react-router';

const { SubMenu } = Menu;

function App() {

  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState()



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


  



  return (
    <div className="App">

      <Router>

        <div>


          <select name="countriesByRegion" onChange={(e)=>{window.location.href=e.target.value}}/* onChange={(e) => {setRegion(e.target.value)}} */>
          <option value='all'>All</option>
            {
              Array.from(new Set(countries.map(c => c.region))).map((el, idx) =>
                <option key={idx} value={`${el}`} selected>{el}</option>)
            }
            
          </select>
            {console.log('value:'+window.location.href)}
          {/* <Link key="one" to='/all'>All</Link>
          <Link key="two" to='/europe'>Europe</Link>
          <Link key="three" to='/asia'>Asia</Link>
          <Link key="four" to='/africa'>Africa</Link>
          <Link key="five" to='/americas'>Americas</Link>
          <Link key="six" to='/oceania'>Oceania</Link>
          <Link key="seven" to='/polar'>Polar</Link> */}




          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/all" component={withRouter(() => <Countries item="all" />)}></Route>
            <Route exact path="/europe" component={withRouter(() => <Countries item="region/europe" />)} ></Route>
            <Route exact path="/asia" component={withRouter(() => <Countries item="region/asia" />)}></Route>
            <Route exact path="/americas" component={withRouter(() => <Countries item="region/americas" />)}></Route>
            <Route exact path="/africa" component={withRouter(() => <Countries item="region/africa" />)}></Route>
            <Route exact path="/oceania" component={withRouter(() => <Countries item="region/oceania" />)}></Route>
            <Route exact path="/polar" component={withRouter(() => <Countries item="region/polar" />)}></Route>


            {/* <Route exact path={`/${window.location.href}`} component={withRouter(() => <Countries item={window.location.href} />)}></Route> */}
            {/* <Countries item={`/${region}`} />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;





