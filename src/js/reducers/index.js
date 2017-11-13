import { combineReducers } from 'redux'
import logoReducer from './logo'

const rootReducer = combineReducers({
  logo: logoReducer
})

export default rootReducer
