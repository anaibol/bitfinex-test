import { combineReducers } from 'redux'

import book from './book'
import trades from './trades'

export default combineReducers({
  book,
  trades
})
