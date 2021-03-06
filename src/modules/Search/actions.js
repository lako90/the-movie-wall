import tmdbInstance from '../../libraries/axios';
import {
  SEARCH_RESET,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from './constants';

const searchReset = () => ({ type: SEARCH_RESET });
const searchRequest = () => ({ type: SEARCH_REQUEST });
const searchSuccess = movies => ({
  type: SEARCH_SUCCESS,
  movies,
});
const searchError = error => ({
  type: SEARCH_ERROR,
  error,
});

const search = query => (dispatch) => {
  dispatch(searchRequest());

  return tmdbInstance({
    method: 'get',
    url: 'search/movie',
    params: {
      query,
    },
  }).then(({ data }) => {
    dispatch(searchSuccess(data));
  }).catch(() => {
    dispatch(searchReset());
    dispatch(searchError());
  });
};

export default search;
