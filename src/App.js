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
              <Route path='/' exact component={HomePage} />
              <Route path='/about' exact component={AboutPage} />
              <Route path='/portfolio' exact component={PortfolioPage} />
              <Route path='/contact' exact component={ContactPage} />
              <Route component={Page404} />
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;