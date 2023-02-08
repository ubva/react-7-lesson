import { combineReducers } from "redux";
import cartReducer from './card'

 const rootReducer = combineReducers({
    cart: cartReducer
 })

 export default rootReducer

