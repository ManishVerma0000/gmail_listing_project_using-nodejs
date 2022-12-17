import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { Route, Switch } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
      <Footer />
    </>
  )
}

export default App