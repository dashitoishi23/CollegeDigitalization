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
import Verify from '../src/components/Verify'
import Register from '../src/components/Register'
import Footer from '../src/components/layouts/Footer'
import persInfo from '../src/components/persInfo';
import persBackground from './components/PersonalBackground/persBackground';
import persBackgroundDisplay from './components/PersonalBackground/perBackgroundDisplay';

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
        <Route exact path = "/reg" component = {Register}/>
        <Route exact path = '/registerAuth' component = {Verify}/>
        <Route exact path = "/dashboard" component = {Dash}/>
        <Route exact path = '/persinfo' component = {persInfo}/>
        <Route exact path = '/persBackground' component={persBackground}/>
        <Route exact path = '/persBackgroundDisplay' component={persBackgroundDisplay}/>
        <Footer />
      </div>
      </Router>
      </Provider>
    )
  }
}

export default App;
