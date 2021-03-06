import React, { useState } from 'react'
import './App.scss'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './screens/HomePage'
import AboutPage from './screens/AboutPage'
import PortfolioPage from './screens/PortfolioPage'
import Page404 from './components/Page404'
import { AnimatePresence } from 'framer-motion'
import aboutData from './data/data'
import NavButton from './components/NavButton'

function App() {
  const [data] = useState(aboutData)
  const [toggle, setToggle] = useState(false)

  const navHandler = () => {
    setToggle(!toggle)
  }

  const closeHandler = () => {
    setToggle(false)
  }
  return (
    <div className="App">
      <NavBar toggle={toggle} />
      <NavButton navHandler={navHandler} />
      <div onClick={closeHandler} className="main-content">
        <div className="content">
          <AnimatePresence>
            <Switch>
              <Route path='/' exact={true} component={() => <HomePage home={data.home} />} />
              <Route path='/about' component={() => <AboutPage about={data.about} />} />
              <Route path='/portfolio' component={() => <PortfolioPage portfolio={data.portfolio} />} />
              <Route component={Page404} />
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;