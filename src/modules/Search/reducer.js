import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_ERROR } from './constants';

const initialState = {
  loading: false,
  error: false,
  data: [],
};

const searchReducer = (state = initialState, { type, movies }) => {
  switch (type) {
    case SEARCH_REQUEST:
      return {
        loading: true,
        error: false,
        data: [],
      };

    case SEARCH_SUCCESS:
      return {
        loading: false,
        error: false,
        data: movies,
      };

    case SEARCH_ERROR:
      return {
        loading: false,
        error: true,
        data: state.data,
      };

    default:
      return state;
  }
};

export default searchReducer;
