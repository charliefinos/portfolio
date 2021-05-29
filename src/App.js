import React from 'react'
import './App.scss'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './screens/HomePage'
import AboutPage from './screens/AboutPage'
import PortfolioPage from './screens/PortfolioPage'
import ContactPage from './screens/ContactPage'
import Page404 from './components/Page404'
import { AnimatePresence } from 'framer-motion'


function App() {

  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <AnimatePresence>
            <Switch>
              <Route path='/' exact={true} component={HomePage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/portfolio' component={PortfolioPage} />
              <Route component={Page404} />
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;