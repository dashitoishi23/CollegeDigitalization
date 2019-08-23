import React,{ Component } from 'react';
import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser } from './actions/authActions'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from '../src/store'
import './App.css';
import Header from '../src/components/layouts/Header'
import Home from '../src/components/Home'
import Dash from '../src/components/Dashboard'
import Footer from '../src/components/layouts/Footer'

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))
}

class App extends Component{
  render(){
    return(
      <Provider store={ store }>
        <Router>
      <div className="App">
        <Header />
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/dashboard" component = {Dash}/>
        <Footer />
      </div>
      </Router>
      </Provider>
    )
  }
}

export default App;
