import * as SampleApi from '../utils/Api/SampleApi';
import _ from 'lodash';

const LOAD_SAMPLE_DATA              = 'sample/LOAD_SAMPLE_DATA';
const LOAD_SAMPLE_DATA_SUCCESS      = 'sample/LOAD_SAMPLE_DATA_SUCCESS';
const LOAD_SAMPLE_DATA_FAIL         = 'sample/LOAD_SAMPLE_DATA_FAIL';

const initialState = {
  loading: false,
  error: null,
  data: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SAMPLE_DATA:
      return {
        ...state,
        loading: true,
        error:  null
      };
    case LOAD_SAMPLE_DATA_SUCCESS:
      return {
        ...state,
        loaded:   true,
        data: action.result.data,
        error:    null,
        loading: false
      };
    case LOAD_SAMPLE_DATA_FAIL:
      return {
        ...state,
        loading:  false,
        error:    'Could not fetch trip details. Please contact support.'
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return !(_.isEmpty(globalState.sampleReducer.data));
}


export function getSampleData(id) {
  return {
    types: [LOAD_SAMPLE_DATA, LOAD_SAMPLE_DATA_SUCCESS, LOAD_SAMPLE_DATA_FAIL],
    promise: () => new Promise((resolve, reject) => {
      SampleApi.getSampleData(id)
      .then(data => (resolve(data)))
      .catch(err => (reject(err)));
    })
  };
}
