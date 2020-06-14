import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types'; 

const ROOT_URL = 'http://localhost:3090';

export const signin = (formProps, callback) => async dispatch => {

  try {
    const response = await axios.post(
      `${ROOT_URL}/signin`,
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      `${ROOT_URL}/signup`,
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};

export const fetchMessageAuth = () => {
  return dispatch => {
    axios.get(ROOT_URL, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    }).then(response => {
      dispatch(fetchMessageAuthRequest(response.data));
    });

  }
}

export const fetchMessageAuthRequest = (request) => {
  return {
    type: FETCH_MESSAGE,
    payload: request
  }
}