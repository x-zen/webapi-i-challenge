import axios from 'axios';
const url = 'http://127.0.0.1:5000/api';

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';
export const addUser = (newUser, id) => dispatch => {
dispatch({ type: ADD_USER_START })
axios
  .post(`${url}/users`)
  .then(res => {
    dispatch({ type: ADD_USER_SUCCESS , payload: res.data });
  })
  .catch(err => {
    dispatch({ type: ADD_USER_FAIL, payload: err });
  })
};

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';
export const getUser = () => dispatch => {
  dispatch({ type: GET_USER_START })
  axios
    .get(`${url}/users`)
    .then(res => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type:GET_USER_FAIL , payload: err });
    })
};

export const GET_THIS_USER_START = 'GET_THIS_USER_START';
export const GET_THIS_USER_SUCCESS = 'GET_THIS_USER_SUCCESS';
export const GET_THIS_USER_FAIL = 'GET_THIS_USER_FAIL';
export const getThisUser = (id) => dispatch => {
dispatch({ type: GET_THIS_USER_START })
axios
  .get(`${url}/users/${id}`, id)
  .then(res => {
    dispatch({ type: GET_THIS_USER_SUCCESS, payload: res.data });
  })
  .catch(err => {
    dispatch({ type: GET_THIS_USER_FAIL, payload: err });
  })
};

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';
export const updateUser = (upUser, id) => dispatch => {
dispatch({ type: UPDATE_USER_START })
axios
  .put(`${url}/users/${id}`)
  .then(res => {
    dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
  })
  .catch(err => {
    dispatch({ type: UPDATE_USER_FAIL, payload: err });
  })
};

export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';
export const deleteUser = (id) => dispatch => {
dispatch({ type: DELETE_USER_START })
axios
  .delete(`${url}/users/${id}`)
  .then(res => {
    dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
  })
  .catch(err => {
    dispatch({ type: DELETE_USER_FAIL, payload: err });
  })
};
