import { AUTH_USER, AUTH_ERROR,FETCH_MESSAGE } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case FETCH_MESSAGE:
      console.log('FETCH_MESSAGE', action.payload); 
      return { ...state, message: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}