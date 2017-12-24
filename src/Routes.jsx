import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import Components
import HomeContainer from './components/HomeContainer.jsx'

class Routes extends Component {
  render() {
    return (
      <Router>
        <span>
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/*' render={() => <h1>404 lol</h1>} />
          </Switch>
        </span>
      </Router>
    )
  }
}

export default Routes