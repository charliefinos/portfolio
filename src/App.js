import React, { useState } from 'react'
import './App.scss'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './screens/HomePage'
import AboutPage from './screens/AboutPage'
import PortfolioPage from './screens/PortfolioPage'
import Page404 from './components/Page404'
import { AnimatePresence } from 'framer-motion'


function App() {
  const [toggle, setToggle] = useState(false)

  const navHandler = () => {
    setToggle(!toggle)
  }
  return (
    <div className="App">
      <div className={`sidebar ${toggle ? 'nav-toggle' : ''}`} >
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navHandler}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
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