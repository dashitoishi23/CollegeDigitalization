import axios from 'axios'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken'

import { GET_ERRORS,SET_CURRENT_USER} from './types'


export const loginCust = (userData) => dispatch => {
 axios.post('/api/faculty/login',userData)
 .then(res=>{
    const { token } = res.data
    localStorage.setItem('jwtToken',token)
    setAuthToken(token)
    const decoded = jwt_decode(token)
    dispatch(setCurrentUser(decoded))

 })
 .catch(err=>{
     dispatch({
         type: GET_ERRORS,
         payload: err.response_data
     })
 })
};

export const setCurrentUser = decoded =>{
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}