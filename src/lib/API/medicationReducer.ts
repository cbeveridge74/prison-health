import {
    FETCH_MEDICATIONS_REQUEST,
    FETCH_MEDICATIONS_SUCCESS,
    FETCH_MEDICATIONS_FAILURE,
  } from './medicationActions';
  
  const initialState = {
    loading: false,
    medications: [],
    error: null,
  };
  
  const medicationReducer = (state = initialState, action: any) => {
    console.log( "Here" );
    switch (action.type) {
      case FETCH_MEDICATIONS_REQUEST:
        return { ...state, loading: true };
      case FETCH_MEDICATIONS_SUCCESS:
        console.log( action.payload );
        return { ...state, loading: false, medications: action.payload };
      case FETCH_MEDICATIONS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default medicationReducer;
  