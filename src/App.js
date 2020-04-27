import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css'
import routesConfig from './routesConfig'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Link to="/" style={{ marginRight: 10 }}>
            Home
          </Link>
          <Link to="/user" style={{ marginRight: 10 }}>
            User
          </Link>
        </div>
        {routesConfig.map(({ path, component, exact }, key) => {
          return (
            <Route
              key={key}
              path={path}
              component={component}
              exact={exact}
            ></Route>
          )
        })}
      </div>
    )
  }
}

export default App
