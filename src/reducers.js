import { combineReducers } from 'redux';

import searchReducer from './modules/Search/reducer';

export default combineReducers({
  searchMovies: searchReducer,
});
