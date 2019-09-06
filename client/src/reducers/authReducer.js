import { SET_CURRENT_USER, REG_USER } from '../actions/types'
import isEmpty from '../validation/is-empty'

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case REG_USER:
            return{
                ...state
            }
        default:
            return state;
    }
}